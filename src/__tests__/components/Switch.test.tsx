import React from "react"
import { render } from "@testing-library/react"

import Switch from "~/components/Switch"

describe("Switch", () => {
  it("should render", () => {
    const { getByLabelText } = render(
      <Switch id="test" label="Insert username" handleCheck={true} />
    )

    const checkbox = getByLabelText("Insert username")

    expect(checkbox).toBeDefined()
  })

  it("should be checked by default", () => {
    const { getByLabelText } = render(
      <Switch id="test" label="Insert username" handleCheck={true} />
    )

    const checkbox = getByLabelText("Insert username")

    expect((checkbox as HTMLInputElement).checked).toBe(true)
  })
})
