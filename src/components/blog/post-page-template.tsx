import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { BlogPostPageQuery } from "~/graphqlTypes"

import { BlogPostBodyHolder, TagsHolder, DateHolder, PostPageTemplateHeader } from "./styles"
import Seo from "../Seo"
import Tag from "./tag"

interface Props {
  data: BlogPostPageQuery
}

const PageTemplate: React.FC<Props> = ({ data: { mdx } }) => {
  const {
    body,
    frontmatter: { title, description, tags, date },
    fields: { slug },
  } = mdx

  return (
    <>
      <Seo
        title={title}
        customMetadata={{
          pathname: slug,
          customDescription: description,
          customType: "article",
        }}
      />
      <PostPageTemplateHeader>{title}</PostPageTemplateHeader>
      <DateHolder>Published on {new Date(date).toLocaleDateString()}</DateHolder>
      <TagsHolder>
        {tags.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </TagsHolder>
      <BlogPostBodyHolder>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogPostBodyHolder>
    </>
  )
}

export default PageTemplate
export const pageQuery = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        date
        description
      }
      fields {
        slug
      }
    }
  }
`
