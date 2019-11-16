import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { BlogPostPageQuery } from "~/graphqlTypes"

import { BlogPostBodyHolder, TagsHolder, DateHolder, PostPageTemplateHeader } from "./styles"
import Seo from "../Seo"
import Tag from "./tag"

interface Props {
  data: BlogPostPageQuery
}

// TODO: refactor component's name
const PageTemplate: React.FC<Props> = ({ data: { mdx } }) => {
  const {
    body,
    frontmatter: { title, description, tags, date, thumbnail },
    fields: { slug },
  } = mdx

  const _fluid = thumbnail?.childImageSharp.fluid as any

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
