import React from "react"
import { Global, SerializedStyles } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"

import MyLoadable from "~/hoc/canvas-loadable"

const HomeHero = MyLoadable({
  loader: () => import("./home-hero/home-hero"),
})

const styles: SerializedStyles[] = [resetStyles, globalStyles]

export const PageLayout: React.FC = () => {
  return (
    <>
      <Global styles={styles} />
      <HomeHero />
    </>
  )
}
