import React from "react"
import { Global, SerializedStyles } from "@emotion/core"
import {
  FaTwitter as Twitter,
  FaDev as DevTo,
  FaLinkedin as LinkedIn,
  FaGithub as Github,
} from "react-icons/fa"

import { Header } from "~/components/page-header"
import { ActionsLinkBar, Icon } from "~/components/actions-link-bar"
import { ThemeToggle } from "~/components/actions-link-bar/theme-toggle"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"
import { Navigation } from "./navigation"

const styles: SerializedStyles[] = [resetStyles, globalStyles]

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

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={styles} />
      <Header />
      <ActionsLinkBar socialLinks={links}>
        <ThemeToggle />
      </ActionsLinkBar>
      <Navigation />
      {children}
    </>
  )
}
