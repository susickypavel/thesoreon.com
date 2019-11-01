import React from "react"
import { useStaticQuery } from "gatsby"
import { render } from "@testing-library/react"

import Index from "../../pages"

describe("Index page", () => {
  beforeAll(() => {
    ;(useStaticQuery as jest.Mock).mockReturnValue({
      site: {
        siteMetadata: {
          description: "Test",
          twitter: "Hello World",
        },
      },
    })
  })
  test("should render", () => {
    const { container } = render(<Index />)

    expect(container.textContent).toContain("Hello World")
  })
})
