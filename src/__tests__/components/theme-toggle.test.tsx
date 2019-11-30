import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { ThemeToggle } from "~/components/actions-link-bar/theme-toggle"

interface ExtendGlobal extends NodeJS.Global {
  __theme: string
  __setPreferredTheme: (theme: string) => void
}

const _global: ExtendGlobal = global as any

describe("Theme toggle", () => {
  const renderComponent = () => {
    return render(<ThemeToggle />)
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
})
