import React from "react"
import { PageLayout } from "./src/components/page-layout/page-layout.component"

import "prismjs/themes/prism-okaidia.css"

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
