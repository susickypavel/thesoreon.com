import React from "react"
import { render } from "@testing-library/react"

import BlogPostList, { Props } from "~/components/blog/blog-post-list"
import ThemeProvider from "~/components/theme-provider/theme-provider"

import "@testing-library/jest-dom/extend-expect"

describe("BlogPostList component", () => {
  // TODO: Make "DeepPartial" custom prop for renderComponent factory
  const renderComponent = (props?: Props) => {
    const defaultProps: Props = {
      data: {
        allMdx: {
          edges: [
            {
              node: {
                fields: {
                  slug: "/hello-world",
                },
                frontmatter: {
                  title: "Hello World!",
                  date: "11-13-2000",
                  tags: ["test", "test2"],
                },
              },
            },
          ],
        },
      },
    }

    const { data } = Object.assign(defaultProps, props)

    return render(
      <ThemeProvider>
        <BlogPostList data={data} />
      </ThemeProvider>
    )
  }

  it("should render", () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it("should render tags", () => {
    const { getByText } = renderComponent({
      data: {
        allMdx: {
          edges: [
            {
              node: {
                fields: {
                  slug: "/test",
                },
                frontmatter: {
                  tags: ["react", "typescript"],
                  title: "Test",
                },
              },
            },
          ],
        },
      },
    })

    expect(getByText("typescript")).toBeInTheDocument()
  })

  it("should render publish date", () => {
    const date = "01-01-1900"
    const localeTransformedDate = new Date(date).toLocaleDateString()

    const { container } = renderComponent({
      data: {
        allMdx: {
          edges: [
            {
              node: {
                fields: {
                  slug: "/test",
                },
                frontmatter: {
                  title: "Test",
                  tags: ["test"],
                  date,
                },
              },
            },
          ],
        },
      },
    })

    expect(container.textContent).toContain(localeTransformedDate)
  })

  it("should render Time to read", () => {
    const { container } = renderComponent({
      data: {
        allMdx: {
          edges: [
            {
              node: {
                timeToRead: 3,
                fields: {
                  slug: "/test",
                },
                frontmatter: {
                  title: "Test",
                  tags: ["test"],
                },
              },
            },
          ],
        },
      },
    })

    expect(container.textContent).toContain("3 min")
  })
})
