import React from "react"

import { FooterHolder, HeartIcon, FooterCredits } from "./footer.styles"

export const Footer: React.FC = () => {
  return (
    <FooterHolder>
      <FooterCredits>
        Made with
        <HeartIcon id="heart" size="2.4rem" color="red" />
        by <strong>Pavel Sušický</strong>
      </FooterCredits>
    </FooterHolder>
  )
}
