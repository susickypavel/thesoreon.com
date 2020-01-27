import React from "react"
import { Global } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"
import { MenuIconToggle } from "./menu-icon-toggle/menu-icon-toggle.component"

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={[resetStyles, globalStyles]} />
      <MenuIconToggle />
      {children}
    </>
  )
}
