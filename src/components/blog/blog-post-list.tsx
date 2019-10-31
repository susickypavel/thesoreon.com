import React from "react"

import { BlogPostsListQuery } from "~/graphqlTypes"
import { BlogPostListHolder, BlogPostListLink } from "./styles"

interface Props {
  data: BlogPostsListQuery
}

const BlogPostList: React.FC<Props> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <BlogPostListHolder>
      {edges.map(({ node: { frontmatter: { title }, fields: { slug } } }) => (
        <BlogPostListLink to={slug} key={title}>
          <h2>{title}</h2>
        </BlogPostListLink>
      ))}
    </BlogPostListHolder>
  )
}

export default BlogPostList
