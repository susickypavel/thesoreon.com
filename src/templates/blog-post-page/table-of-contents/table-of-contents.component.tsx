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
  const [selected, setSelected] = useState(-1)
  const [isBottomed, setBottomed] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setBottomed(
        window.innerHeight + window.pageYOffset + TRESHOLD_MOVE >= document.body.offsetHeight
      )

      if (Math.min(...tops.current) > window.pageYOffset) {
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

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { offsetTop } = document.getElementById(slugify(e.currentTarget.textContent))

    window.scrollTo({
      left: 0,
      top: offsetTop,
    })
  }

  return (
    <TableOfContentsHolder>
      <TableOfContentsLine
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
          })
        }}
        selected={selected === -1}
      >
        TOP
      </TableOfContentsLine>
      {headings.map((heading, index) => {
        const compare = isBottomed ? headings.length - 1 : selected
        return (
          <TableOfContentsLine
            onClick={handleClick}
            selected={index === compare}
            key={heading.value}
          >
            {heading.value}
          </TableOfContentsLine>
        )
      })}
    </TableOfContentsHolder>
  )
}
