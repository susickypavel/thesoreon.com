import React, { useState } from "react"
import { Global } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"
import { MenuIconToggle } from "./menu-icon-toggle/menu-icon-toggle.component"
import { Menu } from "./menu/menu.component"
import { Footer } from "./footer/footer.component"

export const PageLayout: React.FC = ({ children }) => {
  const [toggled, setToggled] = useState(false)

  return (
    <>
      <Global styles={[resetStyles, globalStyles]} />
      <Menu toggled={toggled} />
      <MenuIconToggle setToggled={setToggled} />
      {children}
      <Footer />
    </>
  )
}
