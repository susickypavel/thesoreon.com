import React from "react"
import { render } from "@testing-library/react"

import { PaginationMoveButton } from "~/components/blog-post-previews-list/pagination-buttons"
import { ThemeProvider } from "~/components/providers/theme"

import "@testing-library/jest-dom/extend-expect"

describe("Pagination Button", () => {
  const renderComponent = (currentPage?: number, type?: "next" | "previous") => {
    return render(
      <ThemeProvider>
        <PaginationMoveButton currentPage={currentPage ?? 0} type={type ?? "next"} />
      </ThemeProvider>
    )
  }

  it("should render button for older posts", () => {
    const { getByText } = renderComponent()

    expect(getByText("Older posts")).not.toBeNull()
  })

  it("should render button for newer posts", () => {
    const { getByText } = renderComponent(0, "previous")

    expect(getByText("Newer posts")).not.toBeNull()
  })

  it("should render older posts link that points to currentPage + 1 page", () => {
    const { getByText } = renderComponent(0, "next")

    expect(getByText("Older posts")).toHaveAttribute("href", "/1")
  })

  it("should render newer posts link that points to currentPage - 1 page", () => {
    const { getByText } = renderComponent(2, "previous")

    expect(getByText("Newer posts")).toHaveAttribute("href", "/1")
  })

  it("should render newer posts link that points to root ('/') if currentPage is 1", () => {
    const { getByText } = renderComponent(1, "previous")

    expect(getByText("Newer posts")).toHaveAttribute("href", "/")
  })

  it("should render arrow icon pointing right", () => {
    const { getByTitle } = renderComponent(0, "next")

    expect(getByTitle(/right arrow/i)).not.toBeNull()
  })

  it("should render arrow icon pointing left", () => {
    const { getByTitle } = renderComponent(0, "previous")

    expect(getByTitle(/left arrow/i)).not.toBeNull()
  })
})
