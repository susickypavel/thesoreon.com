import React from "react"
import { render } from "@testing-library/react"
import BlogPostList from "~/components/blog/blog-post-list"

describe("BlogPostList component", () => {
  const renderComponent = () => {
    return render(
      <BlogPostList
        data={{
          allMdx: {
            totalCount: 1,
            edges: [
              {
                node: {
                  fields: {
                    slug: "/hello-world",
                  },
                  frontmatter: {
                    title: "Hello World!",
                  },
                },
              },
            ],
          },
        }}
      />
    )
  }

  test("should render", () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
