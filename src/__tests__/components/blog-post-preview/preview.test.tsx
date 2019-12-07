import React from "react"
import { render } from "@testing-library/react"

import { BlogPostPreview } from "~/components/blog-post-preview"
import { ThemeProvider } from "~/components/providers/theme"

import "@testing-library/jest-dom/extend-expect"

describe("Tag", () => {
  const renderComponent = (index?: number) => {
    return render(
      <ThemeProvider>
        <BlogPostPreview
          index={index ?? 0}
          node={{
            timeToRead: 500,
            fields: {
              slug: "/hello-world",
            },
            frontmatter: {
              title: "Hello World",
              date: "2019-01-29",
              tags: ["Test1", "Test2"],
              thumbnail: {
                childImageSharp: {
                  fluid: {
                    src: "/thumbnail-for-preview",
                    aspectRatio: 2,
                    base64: "test",
                    sizes: "test",
                    srcSet: "test",
                  },
                },
              },
            },
          }}
        />
      </ThemeProvider>
    )
  }

  it("should render title", () => {
    const { container } = renderComponent()
    expect(container.textContent).toContain("Hello World")
  })

  it("should render publish date of a post", () => {
    const { container } = renderComponent()
    expect(container.textContent).toContain("2019")
  })

  it("should render time to read of a post", () => {
    const { container } = renderComponent()
    expect(container.textContent).toContain("500 min")
  })

  it("should render tags of a post", () => {
    const { getAllByText } = renderComponent()
    expect(getAllByText(/Test[0-9]/)).toHaveLength(2)
  })

  it("should be link with href value of a post's slug", () => {
    const { container } = renderComponent()

    expect(container.querySelector("a")).toHaveAttribute("href", "/hello-world")
  })

  it("should render thumbnail when index is 0", () => {
    const index = 0

    const { container } = renderComponent(index)
    expect(container.querySelector("img")).not.toBeNull()
  })

  it("should NOT render thumbnail when index is not 0", () => {
    const index = 1

    const { container } = renderComponent(index)
    expect(container.querySelector("img")).toBeNull()
  })
})
