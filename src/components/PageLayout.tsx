import React from "react"
import { Global, SerializedStyles } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"

import MyLoadable from "~/hoc/canvas-loadable"
import { BlogPostCard } from "./blog-post-card/blog-post-card.component"

const SiteBackground = MyLoadable({
  loader: () => import("./site-background/site-background-component"),
})

const styles: SerializedStyles[] = [resetStyles, globalStyles]

export const PageLayout: React.FC = () => {
  return (
    <>
      <SiteBackground />
      <Global styles={styles} />
      <BlogPostCard />
    </>
  )
}
