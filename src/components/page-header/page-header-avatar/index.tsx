import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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

  return (
    <Link to="/">
      <Avatar alt="Go to homepage" fluid={fluid as any} />
    </Link>
  )
}
