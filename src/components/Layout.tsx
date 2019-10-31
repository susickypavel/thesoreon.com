import React from "react"
import { Global } from "@emotion/core"

import globalStyles from "~/css/global-styles"
import resetStyles from "~/css/reset-styles"
import syntaxHighlighting from "~/css/syntax-highlighting"

import ContentHolder from "./content-holder"
import Sidebar from "./sidebar-panel"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={[syntaxHighlighting, resetStyles, globalStyles]} />
      <Sidebar />
      <ContentHolder>{children}</ContentHolder>
    </>
  )
}

export default Layout
