import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { BlogPostQuery } from "~/graphql-types"

import {
  BlogPostPageHolder,
  BlogPostPageThumbnail,
  BlogPostPageHeader,
  MdxBodyHolder,
} from "./blog-post-page.styles"
import { MdxComponentsProvider } from "~/providers/mdx-components.provider"
import Seo from "~/components/Seo/Seo.component"
import { ItemsBar } from "./items-bar/items-bar.component"

interface Props {
  data: BlogPostQuery
}

const BlogPostPage: React.FC<Props> = ({ data }) => {
  const {
    frontmatter: { title, thumbnail, description },
    body,
    fields: { slug },
    headings,
  } = data.mdx

  return (
    <BlogPostPageHolder id="top">
      <Seo
        title={title}
        customMetadata={{
          pathname: slug,
          customDescription: description,
          customType: "website",
          image: thumbnail.publicURL,
        }}
      />
      <ItemsBar headings={headings} slug={slug} />
      {thumbnail ? <BlogPostPageThumbnail fluid={thumbnail.childImageSharp.fluid as any} /> : null}
      <BlogPostPageHeader>{title}</BlogPostPageHeader>
      <MdxComponentsProvider slug={slug}>
        <MdxBodyHolder>
          <MDXRenderer>{body}</MDXRenderer>
        </MdxBodyHolder>
      </MdxComponentsProvider>
    </BlogPostPageHolder>
  )
}

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      body
      headings {
        value
      }
      frontmatter {
        title
        tags
        date
        description
        thumbnail {
          publicURL
          childImageSharp {
            fluid(jpegQuality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPostPage
