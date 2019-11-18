import { removeLeadingFlash } from "~/utils/removeLeadingSlash"

describe("Remove Leading Flash function", () => {
  it("should remove the leading flash", () => {
    expect(removeLeadingFlash("/test/path/1/2/3/")).toBe("test/path/1/2/3/")
  })
})
