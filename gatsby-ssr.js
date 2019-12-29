import React from "react"
import { PageLayout } from "./src/components/PageLayout/PageLayout.component"

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
