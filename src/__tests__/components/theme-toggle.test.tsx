import React from "react"
import { render, fireEvent } from "@testing-library/react"

import { ThemeToggle } from "~/components/actions-link-bar/theme-toggle"
import { ThemeProvider } from "~/components/providers/theme"

interface ExtendGlobal extends NodeJS.Global {
  __theme: string
  __setPreferredTheme: (theme: string) => void
}

const _global: ExtendGlobal = global as any

describe("Theme toggle", () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
  }

  beforeEach(() => {
    _global.__theme = "dark"
    _global.__setPreferredTheme = function(theme: string) {
      _global.__theme = theme
    }
  })

  it("should have dark theme by default", () => {
    expect(_global.__theme).toBe("dark")
  })

  it("should switch to light theme when button is clicked", () => {
    const { getByLabelText } = renderComponent()

    const button = getByLabelText("Switch theme")
    fireEvent.click(button)

    expect(_global.__theme).toBe("light")
  })

  it("should render icon inside the button", () => {
    const { container } = renderComponent()

    expect(container.querySelector("svg").innerHTML).not.toBeNull()
  })

  it("should change icon when button is clicked", () => {
    const { container } = renderComponent()

    const defaultIcon = container.querySelector("button").children.item(0)

    fireEvent.click(container.querySelector("button"))

    const changedIcon = container.querySelector("button").children.item(0)

    expect(defaultIcon).not.toEqual(changedIcon)
  })
})