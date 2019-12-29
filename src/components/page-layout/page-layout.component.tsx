import React from "react"
import { Global } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"

import MyLoadable from "../hoc/canvas-loadable"

const SiteBackground = MyLoadable({
  loader: () => import("../site-background/site-background-component"),
})

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <SiteBackground />
      <Global styles={[resetStyles, globalStyles]} />
      {children}
    </>
  )
}
