import React from "react"
import {
  FaTwitter as Twitter,
  FaDev as DevTo,
  FaLinkedin as LinkedIn,
  FaGithub as Github,
} from "react-icons/fa"

import { Header } from "~/components/page-header"
import { ActionsLinkBar, Icon } from "~/components/actions-link-bar"
import { ThemeToggle } from "~/components/actions-link-bar/theme-toggle"

const links: Icon[] = [
  {
    icon: Github,
    url: "https://github.com/Thesoreon",
    title: "My Github account",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/Thesoreon",
    title: "My Twitter account",
  },
  {
    icon: DevTo,
    url: "https://dev.to/thesoreon",
    title: "My Dev.to account",
  },
  {
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/pavel-susicky/",
    title: "My LinkedIn account",
  },
]

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <ActionsLinkBar socialLinks={links}>
        <ThemeToggle />
      </ActionsLinkBar>
    </>
  )
}

export default Homepage
