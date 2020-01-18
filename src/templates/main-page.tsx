import React from "react"

import { BlogPostList } from "~/components/blog-post-list/blog-post-list.component"
import { LandingPage } from "~/components/landing-page/landing-page.component"
import Seo from "~/components/Seo/Seo.component"

interface Props {
  location: Location
}

const MainPage: React.FC<Props> = ({ location: { pathname } }) => {
  return (
    <div>
      {/* <BlogPostList /> */}
      <Seo customMetadata={{ pathname }} />
      <LandingPage />
    </div>
  )
}

export default MainPage
