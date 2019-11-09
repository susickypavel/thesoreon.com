import React from "react"

import { BlogPostListLink, PublishDate } from "./styles"
import Tag from "./tag"
import { Mdx, Maybe, MdxFrontmatter, MdxFields } from "~/graphqlTypes"

interface Props {
  edge: { __typename?: "MdxEdge" } & {
    node: { __typename?: "Mdx" } & Pick<Mdx, "timeToRead"> & {
        frontmatter: Maybe<
          { __typename?: "MdxFrontmatter" } & Pick<MdxFrontmatter, "title" | "tags" | "date">
        >
        fields: Maybe<{ __typename?: "MdxFields" } & Pick<MdxFields, "slug">>
      }
  }
}

const BlogPostListItem: React.FC<Props> = ({ edge }) => {
  const {
    node: {
      frontmatter: { title, date, tags },
      fields: { slug },
      timeToRead,
    },
  } = edge

  return (
    <BlogPostListLink to={slug} key={title}>
      <h2>{title}</h2>
      <PublishDate>
        Published on {new Date(date).toLocaleDateString()} {""}
        <span>⌚ {timeToRead} min read</span>
      </PublishDate>
      <div>
        {tags.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
    </BlogPostListLink>
  )
}

export default BlogPostListItem
