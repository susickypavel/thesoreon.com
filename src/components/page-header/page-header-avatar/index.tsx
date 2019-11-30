import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Avatar } from "./styles"
import { PageHeaderAvatarQuery } from "~/graphqlTypes"

export const PageHeaderAvatar: React.FC = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<PageHeaderAvatarQuery>(graphql`
    query PageHeaderAvatar {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Avatar fluid={fluid as any} />
}
