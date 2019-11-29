import React from "react"
import { Global, SerializedStyles } from "@emotion/core"

import resetStyles from "~/css/reset-styles"
import globalStyles from "~/css/global-styles"

const styles: SerializedStyles[] = [resetStyles, globalStyles]

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={styles} />
      {children}
    </>
  )
}
