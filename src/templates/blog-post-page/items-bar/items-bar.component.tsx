import React, { useState } from "react"
import { IoIosList } from "react-icons/io"

import { ItemsBarHolder, ItemsBarToggle, ItemsBarContent, StyledQrCode } from "./items-bar.styles"
import { TableOfContents } from "../table-of-contents/table-of-contents.component"
import { Logo } from "~/components/landing-page/logo/logo.component"

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
        <IoIosList color="white" />
      </ItemsBarToggle>
      <ItemsBarContent>
        <Logo />
        <StyledQrCode
          value={`https://thesoreon.com${slug}`}
          renderAs="svg"
          bgColor="transparent"
          fgColor="white"
        />
        {/* TODO: move table of contents under items-bar folder */}
        <TableOfContents slug={slug} headings={headings} />
      </ItemsBarContent>
    </ItemsBarHolder>
  )
}
