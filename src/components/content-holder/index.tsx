import React from "react"

import { ContentWrapper } from "./styles"

const ContentHolder: React.FC = ({ children }) => {
  return <ContentWrapper id="content-holder">{children}</ContentWrapper>
}

export default ContentHolder
