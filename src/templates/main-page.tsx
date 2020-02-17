import React from "react"

import { BlogPostList } from "~/components/blog-post-list/blog-post-list.component"
import Seo from "~/components/Seo/Seo.component"
import RepositoryList from "~/components/repository-list/repository-list.component"
import { MainPageWrapper } from "./main-page.styles"

interface Props {
  location: Location
}

const MainPage: React.FC<Props> = ({ location: { pathname } }) => {
  return (
    <MainPageWrapper>
      <Seo customMetadata={{ pathname }} />
      <BlogPostList />
      <RepositoryList />
    </MainPageWrapper>
  )
}

export default MainPage
