import React from "react"
import { TagWrapper } from "./styles"
import { getTagColor } from "~/utils/getTagColor"

interface Props {
  tag: string
}

const Tag: React.FC<Props> = ({ tag }) => {
  const tagColor = getTagColor(tag)

  return <TagWrapper {...tagColor}>{tag}</TagWrapper>
}

export default Tag
