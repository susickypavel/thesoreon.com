import React from "react"
import { graphql } from "gatsby"

import { BlogPostPreviewListWrapper, PaginationButtonsHolder, PaginationSplitter } from "./styles"
import { PostPreviewsListQuery } from "~/graphqlTypes"
import { BlogPostPreview } from "../blog-post-preview"
import Seo from "../Seo"
import { PaginationMoveButton } from "./pagination-buttons"

interface Props {
  data: PostPreviewsListQuery
  location: Location
  pageContext: {
    currentPage: number
    totalPagesCount: number
  }
}

const BlogPostPreviewList: React.FC<Props> = ({
  data: {
    allMdx: { edges },
  },
  pageContext: { totalPagesCount, currentPage },
}) => {
  const shouldRenderNextbutton = currentPage + 1 !== totalPagesCount
  const shouldRenderPreviousbutton = currentPage !== 0

  return (
    <BlogPostPreviewListWrapper>
      <Seo title="Home" customMetadata={{ pathname: location.pathname }} />
      {edges.map(({ node }, index) => (
        <BlogPostPreview node={node} index={index} key={node.fields.slug} />
      ))}
      <PaginationButtonsHolder>
        {shouldRenderPreviousbutton ? (
          <PaginationMoveButton currentPage={currentPage} type="previous" />
        ) : null}
        <PaginationSplitter />
        {shouldRenderNextbutton ? (
          <PaginationMoveButton currentPage={currentPage} type="next" />
        ) : null}
      </PaginationButtonsHolder>
    </BlogPostPreviewListWrapper>
  )
}

export default BlogPostPreviewList
export const query = graphql`
  query PostPreviewsList($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: $limit, skip: $skip) {
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
`
