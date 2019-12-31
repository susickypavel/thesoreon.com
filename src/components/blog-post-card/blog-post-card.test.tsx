import React from "react"
import { render, cleanup } from "@testing-library/react"
import * as Gatsby from "gatsby"

import { BlogPostCard } from "./blog-post-card.component"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

useStaticQuery.mockImplementation(() => ({
  file: {
    childImageSharp: {
      fluid: {
        aspectRatio: 0.5,
      },
    },
  },
}))

describe("Blog Post Card", () => {
  beforeEach(() => {
    cleanup()
  })

  const renderComponent = () => {
    return render(
      <BlogPostCard
        node={{
          fields: {
            slug: "/test",
          },
          frontmatter: {
            title: "Hello World",
            date: "2019-11-16",
            description: "This is a description",
            thumbnail: {
              childImageSharp: {
                fluid: {
                  aspectRatio: 1.5,
                },
              },
            },
          },
        }}
      />
    )
  }

  it("should render", () => {
    const { container } = renderComponent()
    expect(container).not.toBeNull()
  })
})
