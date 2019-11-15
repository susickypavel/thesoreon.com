import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import React from "react"
import { MDXProvider } from "@mdx-js/react"

import ThemeProvider from "./src/components/theme-provider/theme-provider"
import {
  Heading,
  Paragraph,
  Blockquote,
  List,
  Image,
} from "./src/components/blog/md-components/index"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider
      components={{
        h1: props => <Heading {...props} heading="h1" />,
        h2: props => <Heading {...props} heading="h2" />,
        h3: props => <Heading {...props} heading="h3" />,
        h4: props => <Heading {...props} heading="h4" />,
        h5: props => <Heading {...props} heading="h5" />,
        h6: props => <Heading {...props} heading="h6" />,
        p: props => <Paragraph {...props} />,
        blockquote: props => <Blockquote {...props} />,
        ol: props => <List listType="ol" {...props} />,
        ul: props => <List listType="ul" {...props} />,
        img: props => <Image {...props} />,
      }}
    >
      <ThemeProvider>{element}</ThemeProvider>
    </MDXProvider>
  )
}

console.log(
  `%c
 █████╗ ████████╗████████╗███████╗███╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗
██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝████╗  ██║╚══██╔══╝██║██╔═══██╗████╗  ██║
███████║   ██║      ██║   █████╗  ██╔██╗ ██║   ██║   ██║██║   ██║██╔██╗ ██║
██╔══██║   ██║      ██║   ██╔══╝  ██║╚██╗██║   ██║   ██║██║   ██║██║╚██╗██║
██║  ██║   ██║      ██║   ███████╗██║ ╚████║   ██║   ██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`,
  "color:Red"
)
console.log("Hi! Source code of my website is Open Sourced.")
console.log(
  "%cCheck it out here: https://github.com/Thesoreon/thesoreon.com",
  "color:Orange; font-weight: bold"
)

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.pathname === "/") {
    window.scrollTo(0, window.innerHeight)
  }

  return false
}
