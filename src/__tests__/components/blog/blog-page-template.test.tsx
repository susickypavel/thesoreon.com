import React from "react"
import { render } from "@testing-library/react"
import PageTemplate from "~/components/blog/post-page-template"
import ThemeProvider from "~/components/theme-provider/theme-provider"

import "@testing-library/jest-dom/extend-expect"

jest.mock("gatsby-plugin-mdx", () => {
  const MDXRenderer = () => <div />

  return {
    MDXRenderer,
  }
})

jest.mock("~/components/Seo", () => {
  const Seo = () => <div />

  return Seo
})

interface Props {
  title?: string
  renderThumbnail?: boolean
  date?: string
  tags?: string[]
}

describe("Blog Page Template", () => {
  const renderComponent = (props: Props = {}) => {
    const { title, renderThumbnail, date, tags } = props
    return render(
      <ThemeProvider>
        <PageTemplate
          data={{
            mdx: {
              body: "# Heading",
              frontmatter: {
                title: title ?? "Hello World",
                date: date ?? "2018-01-01",
                description: "Hello World Testing Post",
                tags: tags ?? ["Lasagna"],
                thumbnail: renderThumbnail
                  ? {
                      childImageSharp: {
                        fluid: {
                          src: "",
                          aspectRatio: 2,
                        },
                      },
                    }
                  : null,
              },
              fields: {
                slug: "/test-slug",
              },
            },
          }}
        />
      </ThemeProvider>
    )
  }

  it("should render", () => {
    const { container } = renderComponent()
    expect(container).toBeDefined()
  })

  it("should render title", () => {
    const { container } = renderComponent({
      title: "This is title",
    })
    expect(container.textContent).toContain("This is title")
  })

  it("should render thumbnail when its passed through props", () => {
    const { container } = renderComponent({
      renderThumbnail: true,
    })

    expect(container.querySelector("img")).toBeInTheDocument()
  })

  it("should NOT render thumbnail when null is passed through thumbnail prop", () => {
    const { container } = renderComponent({
      renderThumbnail: false,
    })

    expect(container.querySelector("img")).not.toBeInTheDocument()
  })

  it("should render publish date", () => {
    const { container } = renderComponent({
      date: "1999-01-01",
    })

    expect(container.textContent).toContain("1999")
  })

  it("should render tags", () => {
    const { getAllByText } = renderComponent({
      tags: ["test-1", "test-2"],
    })

    expect(getAllByText(/test-[0-9]/i)).toHaveLength(2)
  })
})
