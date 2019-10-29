import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import React from "react"
import { MDXProvider } from "@mdx-js/react"

import ThemeProvider from "./src/components/theme-provider/theme-provider"
import {
  Heading,
  Paragraph,
  Blockquote,
  OrderedList,
  UnorderedList,
} from "./src/components/blog/md-components/index"

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
        ol: props => <OrderedList {...props} />,
        ul: props => <UnorderedList {...props} />,
      }}
    >
      <ThemeProvider>{element}</ThemeProvider>
    </MDXProvider>
  )
}
