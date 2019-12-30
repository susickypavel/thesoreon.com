import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BlogPostsListQuery } from "~/graphql-types"
import { BlogPostCard } from "../blog-post-card/blog-post-card.component"
import { BlogPostListHolder } from "./blog-post-list.styles"

export const BlogPostList: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<BlogPostsListQuery>(graphql`
    query BlogPostsList {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              description
              date
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <BlogPostListHolder>
      {edges.map(({ node }) => (
        <BlogPostCard key={node.fields.slug} node={node} />
      ))}
    </BlogPostListHolder>
  )
}
