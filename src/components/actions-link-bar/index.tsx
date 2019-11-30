import React from "react"
import { IconType } from "react-icons/lib/cjs"

import { ActionButtonsHolder, SocialMediaLink, Splitter } from "./styles"
import { createReactIcon } from "~/utils/react-icon"

export interface Icon {
  icon: IconType
  url: string
  title: string
}

interface Props {
  socialLinks: Icon[]
}

export const ActionsLinkBar: React.FC<Props> = ({ socialLinks, children }) => {
  return (
    <ActionButtonsHolder>
      {socialLinks.map(({ icon, url, ...props }) => (
        <SocialMediaLink href={url} key={url}>
          {createReactIcon(icon, { ...props, size: "4rem" })}
        </SocialMediaLink>
      ))}
      <Splitter />
      {children}
    </ActionButtonsHolder>
  )
}
