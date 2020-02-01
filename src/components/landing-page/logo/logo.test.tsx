import React from "react"
import { render } from "@testing-library/react"

import { matchers } from "jest-emotion"

import { Logo } from "./logo.component"

expect.extend(matchers)

describe("Logo", () => {
  const renderComponent = () => {
    return render(<Logo />)
  }

  it("should render", () => {
    const { container } = renderComponent()

    expect(container).not.toBeNull()
  })
})
