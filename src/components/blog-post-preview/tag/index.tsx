import React from "react"

import { TagWrapper } from "./styles"
import { getTagColor } from "~/utils/getTagColor"

interface Props {
  tag: string
}

export const Tag: React.FC<Props> = ({ tag }) => {
  const { background, foreground } = getTagColor(tag)

  return (
    <TagWrapper background={background} foreground={foreground}>
      {tag}
    </TagWrapper>
  )
}
