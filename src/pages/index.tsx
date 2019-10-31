import React from "react"
import { graphql } from "gatsby"

import BlogPostList from "~/components/blog/blog-post-list"
import { BlogPostsListQuery } from "~/graphqlTypes"
import Seo from "~/components/Seo"

interface Props {
  location: Location
  data: BlogPostsListQuery
}

const Index: React.FC<Props> = ({ location, data }) => {
  return (
    <>
      <Seo title="Home" customMetadata={{ pathname: location.pathname }} />
      <h1>Blog posts</h1>
      <BlogPostList data={data} />
    </>
  )
}

export const PageQuery = graphql`
  query BlogPostsList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
