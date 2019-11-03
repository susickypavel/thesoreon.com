import React from "react"
import { render } from "@testing-library/react"

import BlogPostList from "~/components/blog/blog-post-list"
import ThemeProvider from "~/components/theme-provider/theme-provider"

describe("BlogPostList component", () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider>
        <BlogPostList
          data={{
            allMdx: {
              edges: [
                {
                  node: {
                    fields: {
                      slug: "/hello-world",
                    },
                    frontmatter: {
                      title: "Hello World!",
                      tags: ["test", "test2"],
                      date: "11-13-2000",
                    },
                  },
                },
              ],
            },
          }}
        />
      </ThemeProvider>
    )
  }

  test("should render", () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
