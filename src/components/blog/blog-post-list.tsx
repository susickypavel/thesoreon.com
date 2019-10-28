import React from "react"
import { Link } from "gatsby"

import { BlogPostsListQuery } from "~/graphqlTypes"

interface Props {
  data: BlogPostsListQuery
}

const BlogPostList: React.FC<Props> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <div>
      {edges.map(({ node: { frontmatter: { title }, fields: { slug } } }) => (
        <Link to={slug} key={title}>
          <h2>{title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default BlogPostList
