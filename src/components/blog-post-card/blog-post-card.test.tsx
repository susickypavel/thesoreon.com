import React from "react"
import { render } from "@testing-library/react"
import { BlogPostCard } from "./blog-post-card.component"

describe("Blog Post Card", () => {
  const renderComponent = () => {
    return render(<BlogPostCard />)
  }

  it("should render", () => {
    const { container } = renderComponent()
    expect(container).not.toBeNull()
  })
})
