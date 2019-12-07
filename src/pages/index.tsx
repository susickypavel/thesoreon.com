import React from "react"

import Seo from "~/components/Seo"
import { BlogPostPreviewList } from "~/components/blog-post-previews-list"

interface Props {
  location: Location
}

const Homepage: React.FC<Props> = ({ location }) => {
  return (
    <>
      <Seo title="Home" customMetadata={{ pathname: location.pathname }} />
      <BlogPostPreviewList />
    </>
  )
}

export default Homepage
