import React from "react"
import { render } from "@testing-library/react"

import Index from "../../pages"

describe("Index page", () => {
  test("should render", () => {
    const { container } = render(<Index />)

    expect(container.textContent).toBe("Hello World")
  })
})
