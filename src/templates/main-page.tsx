import React from "react"

import { BlogPostList } from "~/components/blog-post-list/blog-post-list.component"
import Seo from "~/components/Seo/Seo.component"
import { Logo } from "~/components/landing-page/logo/logo.component"

interface Props {
  location: Location
}

const MainPage: React.FC<Props> = ({ location: { pathname } }) => {
  return (
    <div>
      <Seo customMetadata={{ pathname }} />
      <Logo />
      <BlogPostList />
    </div>
  )
}

export default MainPage
