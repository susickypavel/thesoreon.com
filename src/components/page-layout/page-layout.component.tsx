import React, { useState } from "react"
import { Global } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"
import { MenuIconToggle } from "./menu-icon-toggle/menu-icon-toggle.component"
import { Menu } from "./menu/menu.component"
import { Footer } from "./footer/footer.component"

interface Props {
  location: Location
}

export const PageLayout: React.FC<Props> = ({ children, location }) => {
  const [toggled, setToggled] = useState(false)
  return (
    <>
      <Global styles={[resetStyles, globalStyles]} />
      {location.pathname !== "/" ? (
        <>
          <Menu toggled={toggled} />
          <MenuIconToggle setToggled={setToggled} />
        </>
      ) : null}
      {children}
      <Footer />
    </>
  )
}
