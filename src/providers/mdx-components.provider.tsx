import React from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  Header,
  Paragraph,
  ExternalLink,
  List,
  BlockQuote,
  YoutubeEmbed,
  YoutubeEmbedHolder,
} from "~/components/mdx-components/mdx-components"

interface Props {
  slug: string
}

export const MdxComponentsProvider: React.FC<Props> = ({ children, slug }) => {
  return (
    <MDXProvider
      components={{
        h1: props => <Header type="h1" slug={slug} {...props} />,
        h2: props => <Header type="h2" slug={slug} {...props} />,
        h3: props => <Header type="h3" slug={slug} {...props} />,
        h4: props => <Header type="h4" slug={slug} {...props} />,
        h5: props => <Header type="h5" slug={slug} {...props} />,
        h6: props => <Header type="h6" slug={slug} {...props} />,
        p: props => <Paragraph {...props} />,
        a: (props: any) => {
          // TODO: refactor this and make tests
          const reg = /youtube/i
          if (reg.test(props.href)) {
            return (
              <YoutubeEmbedHolder>
                <YoutubeEmbed src={props.href} />
              </YoutubeEmbedHolder>
            )
          }
          return <ExternalLink {...props} />
        },
        ul: props => <List type="ul" {...props} />,
        ol: props => <List type="ol" {...props} />,
        blockquote: props => <BlockQuote {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  )
}
