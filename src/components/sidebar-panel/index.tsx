import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaTwitter as Twitter,
  FaDev as DevTo,
  FaLinkedin as LinkedIn,
  FaGithub as Github,
} from "react-icons/fa"

import { SidebarWrapper, Avatar, SidebarHeader } from "./styles"
import { AvatarPhotoQuery } from "~/graphqlTypes"
import ThemeToggle from "../theme-provider/theme-toggle"
import SocialMedia from "./social-media"
import Navigation from "./navigation"
import ScrollIcon from "./scroll-icon"

const Sidebar: React.FC = () => {
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

  const icons = [
    {
      component: Github,
      url: "https://github.com/Thesoreon",
      title: "My Github account",
    },
    {
      component: Twitter,
      url: "https://twitter.com/Thesoreon",
      title: "My Twitter account",
    },
    {
      component: DevTo,
      url: "https://dev.to/thesoreon",
      title: "My Dev.to account",
    },
    {
      component: LinkedIn,
      url: "https://www.linkedin.com/in/pavel-susicky/",
      title: "My LinkedIn account",
    },
  ]

  return (
    <SidebarWrapper>
      <Avatar fixed={fixed as any} />
      <SidebarHeader>
        Paul <ThemeToggle />
      </SidebarHeader>
      <SocialMedia icons={icons} />
      <Navigation />
      <ScrollIcon />
    </SidebarWrapper>
  )
}

export default Sidebar
