import React from "react"
import { Global } from "@emotion/core"

import globalStyles from "~/css/global-styles"
import resetStyles from "~/css/reset-styles"
import ThemeProvider from "./theme-provider/theme-provider"
import Seo, { CustomMetaData } from "./Seo"
import ContentHolder from "./content-holder"
import Navigation from "./navigation"

interface Props {
  title?: string
  metaData: CustomMetaData
}

const Layout: React.FC<Props> = ({ children, title = "Blog", metaData }) => {
  return (
    <ThemeProvider>
      <Seo title={title} customMetadata={metaData} />
      <Global styles={[resetStyles, globalStyles]} />
      <Navigation />
      <ContentHolder>{children}</ContentHolder>
    </ThemeProvider>
  )
}

export default Layout
