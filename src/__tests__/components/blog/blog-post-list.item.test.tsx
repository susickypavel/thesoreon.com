import React from "react"
import { render } from "@testing-library/react"
import BlogPostListItem from "~/components/blog/blog-post-list-item"
import ThemeProvider from "~/components/theme-provider/theme-provider"

import "@testing-library/jest-dom/extend-expect"

describe("Blog Post List Item", () => {
  const renderComponent = (
    props: {
      title?: string
      slug?: string
      date?: string
      timeToRead?: number
      tags?: string[]
    } = {}
  ) => {
    return render(
      <ThemeProvider>
        <BlogPostListItem
          edge={{
            node: {
              fields: {
                slug: props.slug ?? "/",
              },
              frontmatter: {
                title: props.title ?? "Hello World",
                date: props.date ?? "10-29-2008",
                tags: props.tags ?? ["Test", "L"],
              },
              timeToRead: props.timeToRead ?? 10,
            },
          }}
        />
      </ThemeProvider>
    )
  }

  it("should render Blog post title", () => {
    const { container } = renderComponent({
      title: "Vue introduction",
    })

    expect(container.textContent).toContain("Vue introduction")
  })

  it("should render publish date", () => {
    const { container } = renderComponent({
      date: "09-11-2019",
    })

    expect(container.textContent).toContain("2019")
  })

  it("should render estimated time to read the post", () => {
    const { container } = renderComponent({
      timeToRead: 220,
    })

    expect(container.textContent).toContain("220 min")
  })

  it("should contain href to the blog post's page", () => {
    const { container } = renderComponent({
      slug: "/posts-pathname",
    })

    expect(container.querySelector("a")).toHaveAttribute("href", "/posts-pathname")
  })

  it("should render all tags", () => {
    const { findAllByText } = renderComponent({
      tags: ["tag1", "tag2"],
    })

    return findAllByText(/tag[0-9]/i).then(values => {
      expect(values.length).toBe(2)
    })
  })
})
