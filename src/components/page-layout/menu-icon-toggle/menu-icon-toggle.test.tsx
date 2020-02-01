import React from "react"
import { render, fireEvent, wait } from "@testing-library/react"

import { MenuIconToggle } from "./menu-icon-toggle.component"

describe("Menu Icon toggle", () => {
  const renderComponent = () => {
    return render(<MenuIconToggle setToggled={() => true} />)
  }

  it("should render", () => {
    const { getByLabelText } = renderComponent()

    const toggle = getByLabelText("Open the menu")

    expect(toggle).not.toBeNull()
  })

  it("should handle hover", () => {
    const { getByLabelText, container } = renderComponent()

    const toggle = getByLabelText("Open the menu")

    fireEvent.mouseEnter(toggle)

    return wait(
      () => {
        expect(container.querySelector("svg").style.strokeDashoffset).not.toBeFalsy()
      },
      { timeout: 100 }
    )
  })
})
