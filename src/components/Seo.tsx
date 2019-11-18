import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet as Head } from "react-helmet"

import { SiteMetaDataQuery } from "~/graphqlTypes"
import { removeLeadingFlash } from "~/utils/removeLeadingSlash"

interface Props {
  title?: string
  customMetadata: CustomMetaData
}

export interface CustomMetaData {
  pathname: string
  image?: string
  customDescription?: string
  customType?: "website" | "article"
}

const Seo: React.FC<Props> = ({
  title = "Blog",
  customMetadata: { pathname, customDescription, image = "default.png", customType = "website" },
}) => {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light")
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

  const imagePathWithoutLeadingSlash = removeLeadingFlash(image)
  const composedTitle = `${title} | Pavel Sušický`

  useEffect(() => {
    setActiveTheme(window.__theme)
    window.__onThemeChange = () => {
      setActiveTheme(window.__theme)
    }
  }, [])

  return (
    <>
      <Head defer={false} titleTemplate="%s | Pavel Sušický" htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={customDescription || description} />

        <meta property="og:url" content={`https://thesoreon.com${pathname}`} />
        <meta property="og:type" content={customType} />
        <meta property="og:title" content={composedTitle} />
        <meta property="og:description" content={customDescription || description} />
        <meta
          property="og:image"
          content={`https://thesoreon.com/${imagePathWithoutLeadingSlash}`}
        />

        <meta
          name="twitter:image"
          content={`https://thesoreon.com/${imagePathWithoutLeadingSlash}`}
        />
        <meta name="twitter:creator" content={twitter} />
        <meta name="twitter:title" content={composedTitle} />
        <meta name="twitter:description" content={customDescription || description} />
      </Head>
      <Head>
        <meta name="theme-color" content={activeTheme === "light" ? "lightblue" : "#212121"} />
      </Head>
    </>
  )
}

export default Seo
