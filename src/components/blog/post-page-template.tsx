import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { BlogPostPageQuery } from "~/graphqlTypes"

import Layout from "../Layout"
import { BlogPostBodyHolder } from "./styles"

interface Props {
  data: BlogPostPageQuery
}

const PageTemplate: React.FC<Props> = ({ data: { mdx } }) => {
  const {
    body,
    frontmatter: { title, description },
    fields: { slug },
  } = mdx

  return (
    <Layout
      title={title}
      metaData={{
        pathname: slug,
        customDescription: description,
        customType: "article",
      }}
    >
      <h1>{title}</h1>
      <BlogPostBodyHolder>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogPostBodyHolder>
    </Layout>
  )
}

export default PageTemplate
export const pageQuery = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
    }
  }
`
