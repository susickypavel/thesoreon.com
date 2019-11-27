import { removeLeadingSlash } from "~/utils/removeLeadingSlash"

describe("Remove Leading Flash function", () => {
  it("should remove the leading flash", () => {
    expect(removeLeadingSlash("/test/path/1/2/3/")).toBe("test/path/1/2/3/")
  })
})
