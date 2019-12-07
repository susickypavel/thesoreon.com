import React from "react"
import Img from "gatsby-image"

import {
  BlogPostPreviewWrapper,
  BlogPostPreviewBody,
  BlogPostTitle,
  BlogPostDescription,
} from "./styles"
import {
  Maybe,
  Mdx,
  MdxFields,
  MdxFrontmatter,
  GatsbyImageSharpFluidFragment,
} from "~/graphqlTypes"
import { Tag } from "./tag"
import { TagsHolder } from "./tag/styles"

interface Props {
  index: number
  node: { __typename?: "Mdx" } & Pick<Mdx, "timeToRead"> & {
      fields: Maybe<{ __typename?: "MdxFields" } & Pick<MdxFields, "slug">>
      frontmatter: Maybe<
        { __typename?: "MdxFrontmatter" } & Pick<MdxFrontmatter, "title" | "date" | "tags"> & {
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
    }
}

export const BlogPostPreview: React.FC<Props> = ({
  node: {
    timeToRead,
    frontmatter: { title, date, tags, thumbnail },
    fields: { slug },
  },
  index,
}) => {
  const formattedDate = new Date(date).toLocaleDateString()

  return (
    <BlogPostPreviewWrapper to={slug}>
      {index === 0 && thumbnail ? <Img fluid={thumbnail.childImageSharp.fluid as any} /> : null}
      <BlogPostPreviewBody>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostDescription>
          Published on {formattedDate} ⌚ {timeToRead} min
        </BlogPostDescription>
        <TagsHolder>
          {tags.map(tag => (
            <Tag tag={tag} key={tag} />
          ))}
        </TagsHolder>
      </BlogPostPreviewBody>
    </BlogPostPreviewWrapper>
  )
}
