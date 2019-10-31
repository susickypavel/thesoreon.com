import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { NavigationWrapper, Avatar, SidebarHeader } from "./styles"
import { AvatarPhotoQuery } from "~/graphqlTypes"
import ThemeToggle from "../theme-provider/theme-toggle"

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
      <SidebarHeader>
        Paul <ThemeToggle />
      </SidebarHeader>
    </NavigationWrapper>
  )
}

export default Navigation
