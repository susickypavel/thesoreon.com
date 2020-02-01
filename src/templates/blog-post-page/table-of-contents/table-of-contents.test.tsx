import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import { TableOfContents } from "./table-of-contents.component"

describe("Table Of Contents", () => {
  const renderComponent = () => {
    const headings = [{ value: "1" }, { value: "2" }]

    return render(
      <>
        <TableOfContents headings={headings} slug={"/test"} />
        {headings.map(({ value }) => (
          <div key={value} id={value} style={{ height: 1000, width: 1000 }}>
            Item {value}
          </div>
        ))}
      </>
    )
  }

  it("should render", () => {
    const { container } = renderComponent()

    expect(container).not.toBeNull()
  })

  it("should render two spies", async () => {
    const { findAllByText } = renderComponent()
    const spies = await findAllByText(/^[0-9]$/)
    expect(spies).toHaveLength(2)
  })

  it("should render spy with correct href", async () => {
    const { findByText } = renderComponent()

    const spy = await findByText(/^[1]$/)

    expect(spy).toHaveAttribute("href", "/test#1")
  })

  it("should blur on click", async () => {
    const onClick = jest.fn()

    const { findByText } = renderComponent()

    const spy = await findByText(/^[1]$/)

    fireEvent.click(spy, { target: { blur: onClick } })

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("should render spy of TOP position", async () => {
    const { findByText } = renderComponent()

    const spy = await findByText(/^TOP$/)

    expect(spy).toHaveAttribute("href", "/test#top")
  })

  // TODO: add tests for scroll spy selection
})
