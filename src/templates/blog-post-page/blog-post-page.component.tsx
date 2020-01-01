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

interface Props {
  data: BlogPostQuery
}

const BlogPostPage: React.FC<Props> = ({ data }) => {
  const {
    frontmatter: { title, thumbnail },
    body,
    fields: { slug },
  } = data.mdx

  return (
    <BlogPostPageHolder>
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
      frontmatter {
        title
        tags
        date
        description
        thumbnail {
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
