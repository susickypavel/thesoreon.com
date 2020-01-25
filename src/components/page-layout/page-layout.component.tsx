import React from "react"
import { Global } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={[resetStyles, globalStyles]} />
      {children}
    </>
  )
}
