import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { Global } from "@emotion/core"

import { BlogPostPageQuery } from "~/graphqlTypes"
import syntaxHighlighting from "~/css/syntax-highlighting"

import {
  BlogPostBodyHolder,
  TagsHolder,
  DateHolder,
  PostPageTemplateHeader,
  BlogPostPageWrapper,
} from "./blog-post-page.styles"
import Seo from "../Seo"
import { Tag } from "../blog-post-preview/tag"

interface Props {
  data: BlogPostPageQuery
}

const BlogPostPage: React.FC<Props> = ({ data: { mdx } }) => {
  const {
    body,
    frontmatter: { title, description, tags, date, thumbnail },
    fields: { slug },
  } = mdx

  const _fluid = thumbnail?.childImageSharp.fluid as any
  return (
    <BlogPostPageWrapper>
      <Global styles={[syntaxHighlighting]} />
      <Seo
        title={title}
        customMetadata={{
          pathname: slug,
          customDescription: description,
          customType: "article",
          image: _fluid?.src,
        }}
      />
      {_fluid ? <Img fluid={_fluid} /> : null}
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
    </BlogPostPageWrapper>
  )
}

export default BlogPostPage
export const pageQuery = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        date
        description
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
    }
  }
`
