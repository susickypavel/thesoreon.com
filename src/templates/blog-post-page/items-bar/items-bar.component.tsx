import React, { useState } from "react"
import { FaListOl } from "react-icons/fa"

import { ItemsBarHolder, ItemsBarToggle, ItemsBarContent, StyledQrCode } from "./items-bar.styles"
import { TableOfContents } from "../table-of-contents/table-of-contents.component"

interface Props {
  slug: string
  headings: any
}

export const ItemsBar: React.FC<Props> = ({ slug, headings }) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <ItemsBarHolder collapsed={collapsed}>
      <ItemsBarToggle
        onClick={() => {
          setCollapsed(prev => !prev)
        }}
      >
        <FaListOl color="black" />
      </ItemsBarToggle>
      <ItemsBarContent>
        {/* TODO: size prop should be number */}
        <StyledQrCode
          value={`https://thesoreon.com${slug}`}
          size="auto"
          renderAs="svg"
          bgColor="transparent"
        />
        {/* TODO: move table of contents under items-bar folder */}
        <TableOfContents slug={slug} headings={headings} />
      </ItemsBarContent>
    </ItemsBarHolder>
  )
}
