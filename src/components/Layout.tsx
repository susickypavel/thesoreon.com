import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SiteMetaDataQuery } from "~/graphqlTypes"

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
  return <>{children}</>
}

export default Layout
