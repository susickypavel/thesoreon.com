import React from "react"

import { BlogPostPreviewListWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { PostPreviewsListQuery } from "~/graphqlTypes"
import { BlogPostPreview } from "../blog-post-preview"

export const BlogPostPreviewList: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<PostPreviewsListQuery>(graphql`
    query PostPreviewsList {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              date
              tags
              thumbnail {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <BlogPostPreviewListWrapper>
      {edges.map(({ node }, index) => (
        <BlogPostPreview node={node} index={index} key={node.fields.slug} />
      ))}
    </BlogPostPreviewListWrapper>
  )
}
