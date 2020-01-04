import React, { useState } from "react"

import { SidebarHolder } from "./sidebar.styles"
import { SidebarToggle } from "./sidebar-toggle/sidebar-toggle.component"
import { Link } from "gatsby"

export const Sidebar: React.FC = ({ children }) => {
  const [visible, setVisibility] = useState(false)

  return (
    <>
      <SidebarToggle onToggle={() => setVisibility(prev => !prev)} />
      <SidebarHolder visible={visible}>
        {children}
        <Link to="/">Home</Link>
      </SidebarHolder>
    </>
  )
}
