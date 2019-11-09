import React from "react"

import { BlogPostsListQuery } from "~/graphqlTypes"
import { BlogPostListHolder } from "./styles"
import BlogPostListItem from "./blog-post-list-item"

export interface Props {
  data: BlogPostsListQuery
}

const BlogPostList: React.FC<Props> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <BlogPostListHolder>
      {edges.map(edge => (
        <BlogPostListItem edge={edge} key={edge.node.frontmatter.title} />
      ))}
    </BlogPostListHolder>
  )
}

export default BlogPostList
