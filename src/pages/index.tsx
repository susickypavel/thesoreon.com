import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/Layout"
import BlogPostList from "~/components/blog/blog-post-list"
import { BlogPostsListQuery } from "~/graphqlTypes"

interface Props {
  location: Location
  data: BlogPostsListQuery
}

const Index: React.FC<Props> = ({ location, data }) => {
  return (
    <Layout
      title="Home"
      metaData={{
        pathname: location.pathname,
      }}
    >
      <h1>Blog posts</h1>
      <BlogPostList data={data} />
    </Layout>
  )
}

export const PageQuery = graphql`
  query BlogPostsList {
    allMdx {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Index
