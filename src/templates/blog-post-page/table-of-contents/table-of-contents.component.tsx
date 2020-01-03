import React, { useEffect, useState, useRef } from "react"
import { throttle } from "lodash"

import { TableOfContentsHolder, TableOfContentsLine } from "./table-of-contents.styled"

import { MdxHeadingMdx } from "~/graphql-types"
import { slugify } from "~/utils/slugify"

interface Props {
  headings: ({ __typename?: "MdxHeadingMdx" } & Pick<MdxHeadingMdx, "value">)[]
}

const TRESHOLD_MOVE = 2

export const TableOfContents: React.FC<Props> = ({ headings }) => {
  const tops = useRef<number[]>([])
  const [selected, setSelected] = useState(0)
  const [isBottomed, setBottomed] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setBottomed(
        window.innerHeight + window.pageYOffset + TRESHOLD_MOVE >= document.body.offsetHeight
      )

      tops.current.forEach((top, index) => {
        if (top - 5 < window.pageYOffset) {
          setSelected(index)
        }
      })
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
        const el = document.getElementById(slugify(heading.value))
        const { top } = el.getBoundingClientRect()
        tops.current.push(top)
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
      {headings.map((heading, index) => {
        const compare = isBottomed ? headings.length - 1 : selected
        return (
          <TableOfContentsLine selected={index === compare} key={heading.value}>
            {heading.value}
          </TableOfContentsLine>
        )
      })}
    </TableOfContentsHolder>
  )
}
