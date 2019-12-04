import React from "react"
// FIX: types defined in index.d.ts do not work
// @ts-ignore
import { MDXProvider } from "@mdx-js/react"
import { Heading, Paragraph, Blockquote, List, Code } from "./styles"

export const MdxComponentsProvider: React.FC = ({ children }) => {
  return (
    <MDXProvider
      components={{
        h1: (props: any) => <Heading {...props} heading="h1" />,
        h2: (props: any) => <Heading {...props} heading="h2" />,
        h3: (props: any) => <Heading {...props} heading="h3" />,
        h4: (props: any) => <Heading {...props} heading="h4" />,
        h5: (props: any) => <Heading {...props} heading="h5" />,
        h6: (props: any) => <Heading {...props} heading="h6" />,
        p: (props: any) => <Paragraph {...props} />,
        blockquote: (props: any) => <Blockquote {...props} />,
        ol: (props: any) => <List listType="ol" {...props} />,
        ul: (props: any) => <List listType="ul" {...props} />,
        code: (props: any) => <Code {...props} />,
        // img: props => <Image {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  )
}
