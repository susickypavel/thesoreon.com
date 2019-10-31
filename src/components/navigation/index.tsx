import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { NavigationWrapper, Avatar } from "./styles"
import { AvatarPhotoQuery } from "~/graphqlTypes"

const Navigation: React.FC = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery<AvatarPhotoQuery>(graphql`
    query AvatarPhoto {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(height: 150, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <NavigationWrapper>
      <Avatar fixed={fixed as any} />
      <h1>Hello World</h1>
    </NavigationWrapper>
  )
}

export default Navigation
