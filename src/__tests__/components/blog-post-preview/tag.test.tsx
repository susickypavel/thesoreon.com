import React from "react"
import { render } from "@testing-library/react"

import { Tag } from "~/components/blog-post-preview/tag"

describe("Tag", () => {
  const renderComponent = (tag?: string) => {
    return render(<Tag tag={tag ?? "Test"} />)
  }

  it("should render", () => {
    const { getByText } = renderComponent("react")

    expect(getByText("react")).not.toBeNull()
  })
})
