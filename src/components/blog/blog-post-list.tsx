import React from "react"

import { BlogPostsListQuery } from "~/graphqlTypes"
import { BlogPostListHolder, BlogPostListLink, PublishDate } from "./styles"
import Tag from "./tag"

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
      {edges.map(
        ({
          node: {
            frontmatter: { title, date, tags },
            fields: { slug },
            timeToRead,
          },
        }) => (
          <BlogPostListLink to={slug} key={title}>
            <h2>{title}</h2>
            <PublishDate>
              Published on {new Date(date).toLocaleDateString()} - {timeToRead} min read
            </PublishDate>
            <div>
              {tags.map(tag => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
          </BlogPostListLink>
        )
      )}
    </BlogPostListHolder>
  )
}

export default BlogPostList
