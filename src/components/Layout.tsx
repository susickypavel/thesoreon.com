import React from "react"
import { Global } from "@emotion/core"

import globalStyles from "~/css/global-styles"
import resetStyles from "~/css/reset-styles"
import syntaxHighlighting from "~/css/syntax-highlighting"

import Seo, { CustomMetaData } from "./Seo"
import ContentHolder from "./content-holder"
import Sidebar from "./sidebar-panel"

interface Props {
  title?: string
  metaData: CustomMetaData
}

const Layout: React.FC<Props> = ({ children, title = "Blog", metaData }) => {
  return (
    <>
      <Seo title={title} customMetadata={metaData} />
      <Global styles={[syntaxHighlighting, resetStyles, globalStyles]} />
      <Sidebar />
      <ContentHolder>{children}</ContentHolder>
    </>
  )
}

export default Layout
