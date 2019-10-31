import React from "react"
import { IconType } from "react-icons/lib/cjs"

import { createReactIcon } from "~/utils/react-icon"
import { SocialMediaLink, SocialMediaHolder } from "../styles"

interface SocialIcon {
  component: IconType
  url: string
  title: string
}

interface Props {
  icons: SocialIcon[]
}

const SocialMedia: React.FC<Props> = ({ icons }) => {
  return (
    <SocialMediaHolder>
      {icons.map(({ component, url, ...props }) => (
        <SocialMediaLink href={url} key={url}>
          {createReactIcon(component, { ...props, size: 30 })}
        </SocialMediaLink>
      ))}
    </SocialMediaHolder>
  )
}

export default SocialMedia
