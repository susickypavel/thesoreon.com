import React from "react"

import { PageHeaderHeadline, PageHeaderWrapper, PageHeaderDescription } from "./styles"
import { PageHeaderAvatar } from "./page-header-avatar"

export const Header: React.FC = () => {
  return (
    <PageHeaderWrapper>
      <PageHeaderAvatar />
      <PageHeaderHeadline>Pavel Susicky</PageHeaderHeadline>
      <PageHeaderDescription>Frontend developer from Czech republic</PageHeaderDescription>
    </PageHeaderWrapper>
  )
}
