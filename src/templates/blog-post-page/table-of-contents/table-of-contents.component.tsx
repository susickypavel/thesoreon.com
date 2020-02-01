import React, { useEffect, useState, useRef } from "react"
import { throttle } from "lodash"

import { TableOfContentsHolder, TableOfContentsLine } from "./table-of-contents.styled"

import { MdxHeadingMdx } from "~/graphql-types"
import { slugify } from "~/utils/slugify"

interface Props {
  headings: ({ __typename?: "MdxHeadingMdx" } & Pick<MdxHeadingMdx, "value">)[]
  slug: string
}

const TRESHOLD_MOVE = 2

export const TableOfContents: React.FC<Props> = ({ headings, slug }) => {
  const tops = useRef<number[]>([])
  const [selected, setSelected] = useState(-1)
  const [isBottomed, setBottomed] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setBottomed(
        window.innerHeight + window.pageYOffset + TRESHOLD_MOVE >= document.body.offsetHeight
      )

      if (Math.min(...tops.current) - TRESHOLD_MOVE > window.pageYOffset) {
        setSelected(-1)
      } else {
        tops.current.forEach((top, index) => {
          if (top - 5 < window.pageYOffset) {
            setSelected(index)
          }
        })
      }
    }, 250)

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = throttle(() => {
      tops.current = []
      headings.forEach(heading => {
        const { offsetTop } = document.getElementById(slugify(heading.value))
        tops.current.push(offsetTop)
      })
    }, 1000)

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [headings])

  return (
    <TableOfContentsHolder>
      <TableOfContentsLine to={`${slug}#top`} selected={selected === -1}>
        TOP
      </TableOfContentsLine>
      {headings.map((heading, index) => {
        const compare = isBottomed ? headings.length - 1 : selected
        return (
          <TableOfContentsLine
            to={`${slug}#${slugify(heading.value)}`}
            selected={index === compare}
            key={heading.value}
            onClick={e => e.currentTarget.blur()}
          >
            {heading.value}
          </TableOfContentsLine>
        )
      })}
    </TableOfContentsHolder>
  )
}
