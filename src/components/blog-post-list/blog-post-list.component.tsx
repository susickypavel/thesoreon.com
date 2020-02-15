import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaStar } from "react-icons/fa"

import { BlogPostsListQuery } from "~/graphql-types"
import { BlogPostCard } from "../blog-post-card/blog-post-card.component"
import { BlogPostListHolder, BlogPostListHeadline } from "./blog-post-list.styles"

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
              thumbnail {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
      <BlogPostListHeadline>
        <FaStar color="#ffd700" /> Latest blog posts
      </BlogPostListHeadline>
      {edges.map(({ node }) => (
        <BlogPostCard key={node.fields.slug} node={node} />
      ))}
    </BlogPostListHolder>
  )
}
