import React from "react"

import { BlogPostCard } from "~/components/blog-post-card/blog-post-card.component"

const MainPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <BlogPostCard />
    </div>
  )
}

export default MainPage
