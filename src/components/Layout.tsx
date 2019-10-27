import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Global } from "@emotion/core"

import { SiteMetaDataQuery } from "~/graphqlTypes"
import globalStyles from "~/css/global-styles"
import resetStyles from "~/css/reset-styles"
import ThemeProvider from "./theme-provider/theme-provider"

const Layout: React.FC = ({ children }) => {
  const {
    site: {
      siteMetadata: { description, twitter },
    },
  } = useStaticQuery<SiteMetaDataQuery>(graphql`
    query siteMetaData {
      site {
        siteMetadata {
          description
          twitter
        }
      }
    }
  `)
  console.log({ twitter, description })
  return (
    <ThemeProvider>
      <Global styles={[resetStyles, globalStyles]} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
