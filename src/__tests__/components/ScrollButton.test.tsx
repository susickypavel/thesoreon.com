import React from "react"
import { render, fireEvent } from "@testing-library/react"

import ScrollButton from "~/components/scroll-button"
import ThemeProvider from "~/components/theme-provider/theme-provider"

import "@testing-library/jest-dom/extend-expect"

interface ExtendGlobal extends NodeJS.Global {
  scrollTo: jest.Mock
  scrollY: number
  pageYOffset: number
  innerHeight: number
  innerWidth: number
}

const _global: ExtendGlobal = global as any

_global.scrollTo = jest.fn()

beforeEach(() => {
  _global.scrollY = undefined
  _global.innerHeight = undefined
  _global.scrollTo.mockClear()
  _global.pageYOffset = undefined
  _global.innerWidth = 500
})

describe("ScrollButton", () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider>
        <ScrollButton />
      </ThemeProvider>
    )
  }

  it("should scroll to top when button is clicked", () => {
    const { getByLabelText } = renderComponent()

    fireEvent.click(getByLabelText("scroll"))

    expect(_global.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "smooth" })
  })

  it("should be hidden by default", () => {
    _global.innerHeight = 500
    _global.scrollY = 0

    const { getByLabelText } = renderComponent()

    const button = getByLabelText("scroll")

    expect(button).toHaveAttribute("aria-hidden", "true")
  })

  it("should be visible when scroll is bigger than viewport's height", () => {
    _global.innerHeight = 500
    _global.scrollY = 700

    const { getByLabelText } = renderComponent()

    const button = getByLabelText("scroll")

    fireEvent.scroll(global as any)

    expect(button).toHaveAttribute("aria-hidden", "false")
  })

  it("should be visible when scroll is bigger than viewport's height when pageYOffset is defined", () => {
    _global.innerHeight = 500
    _global.pageYOffset = 700

    const { getByLabelText } = renderComponent()

    const button = getByLabelText("scroll")

    fireEvent.scroll(global as any)

    expect(button).toHaveAttribute("aria-hidden", "false")
  })

  it("should be hidden for larger screens even if scroll is bigger than viewport's height", () => {
    _global.innerHeight = 500
    _global.scrollY = 1000
    _global.innerWidth = 1000

    const { getByLabelText } = renderComponent()

    const button = getByLabelText("scroll")

    expect(button).toHaveAttribute("aria-hidden", "true")
  })

  it("should be hidden for larger screens if scroll is at top of the page", () => {
    _global.innerHeight = 500
    _global.scrollY = 0
    _global.innerWidth = 1000

    const { getByLabelText } = renderComponent()

    const button = getByLabelText("scroll")

    expect(button).toHaveAttribute("aria-hidden", "true")
  })
})
