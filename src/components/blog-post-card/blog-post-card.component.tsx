import React, { useState } from "react"

import { FaClock, FaCalendarAlt } from "react-icons/fa"

import { useSpring } from "react-spring"

import {
  BlogPostCardWrapper,
  BlogPostCardHeader,
  BlogPostCardDescription,
  BlogPostCardBody,
  BlogPostCardInformationBar,
  BlogPostCardInformation,
} from "./blog-post-card.styles"
import { LinkQRCode } from "./qr-code/qr-code.component"
import {
  Maybe,
  MdxFrontmatter,
  MdxFields,
  Mdx,
  GatsbyImageSharpFluidFragment,
} from "~/graphql-types"

const tension = 250
const friction = 40
const mass = 5
const scale = 1.05

const calculateTilt = (x: number, y: number, height: number, width: number) => [
  -(y - height / 2) / 20,
  (x - width / 2) / 20,
  scale,
]

const transform = (x: number, y: number, s: number) =>
  `perspective(3000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface Props {
  node: { __typename?: "Mdx" } & Pick<Mdx, "timeToRead"> & {
      frontmatter: Maybe<
        { __typename?: "MdxFrontmatter" } & Pick<
          MdxFrontmatter,
          "title" | "description" | "date"
        > & {
            thumbnail: Maybe<
              { __typename?: "File" } & {
                childImageSharp: Maybe<
                  { __typename?: "ImageSharp" } & {
                    fluid: Maybe<{ __typename?: "ImageSharpFluid" } & GatsbyImageSharpFluidFragment>
                  }
                >
              }
            >
          }
      >
      fields: Maybe<{ __typename?: "MdxFields" } & Pick<MdxFields, "slug">>
    }
}

export const BlogPostCard: React.FC<Props> = ({
  node: {
    fields: { slug },
    frontmatter: { title, date, description, thumbnail },
    timeToRead,
  },
}) => {
  const [hovered, setHovered] = useState(false)
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass, tension, friction },
  }))

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { top, left, height, width } = e.currentTarget.getBoundingClientRect()

    set({
      xys: calculateTilt(clientX - left, clientY - top, height, width),
    })
  }

  const handleFocus = (e: React.FocusEvent) => {
    const { height, width } = e.currentTarget.getBoundingClientRect()

    setHovered(true)

    set({
      xys: calculateTilt(width / 2, height / 2, height, width),
    })
  }

  const handleQuit = () => {
    setHovered(false)
    set({ xys: [0, 0, 1] })
  }

  return (
    <BlogPostCardWrapper
      to={slug}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleQuit}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleQuit}
      style={{ transform: props.xys.interpolate(transform as any) }}
    >
      <BlogPostCardBody>
        <BlogPostCardHeader>{title}</BlogPostCardHeader>
        <BlogPostCardInformationBar>
          <BlogPostCardInformation>
            <FaClock /> {timeToRead} min read
          </BlogPostCardInformation>
          <BlogPostCardInformation>
            <FaCalendarAlt /> {new Date(date).toLocaleDateString()}
          </BlogPostCardInformation>
        </BlogPostCardInformationBar>
        <BlogPostCardDescription>{description}</BlogPostCardDescription>
      </BlogPostCardBody>
      <LinkQRCode slug={slug} fluid={thumbnail?.childImageSharp.fluid} hovered={hovered} />
    </BlogPostCardWrapper>
  )
}
