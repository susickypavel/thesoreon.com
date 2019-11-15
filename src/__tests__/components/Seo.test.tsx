import React from "react"
import { useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { render } from "@testing-library/react"

import Seo from "~/components/Seo"

describe("Seo", () => {
  beforeAll(() => {
    ;(useStaticQuery as jest.Mock).mockReturnValue({
      site: {
        siteMetadata: {
          description: "Testing description",
          twitter: "@random",
        },
      },
    })
  })

  const getMetaTag = (meta: string) => {
    interface Metatag {
      name?: string
      property?: string
      content: string
    }
    const { metaTags }: any = Helmet.peek()

    const tags = metaTags as Metatag[]

    const tag = tags.find((tag: Metatag) => tag.name === meta || tag.property == meta)

    if (tag) {
      return tag
    }

    throw Error(`CUSTOM Error message: Couldn't find meta tag '${meta}'`)
  }

  it("should have html attribute lang equal to 'en'", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/" }} />)

    const { htmlAttributes }: any = Helmet.peek()
    expect(htmlAttributes.lang).toEqual("en")
  })

  it("should have contained 'Test' in a title and title metaTags", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/" }} />)

    const { title } = Helmet.peek()

    expect(title).toContain("Test")
    expect(getMetaTag("twitter:title").content).toContain("Test")
    expect(getMetaTag("og:title").content).toContain("Test")
  })

  it("should contain meta tag 'description' with value from mocked query", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/" }} />)

    expect(getMetaTag("description").content).toBe("Testing description")
    expect(getMetaTag("og:description").content).toBe("Testing description")
    expect(getMetaTag("twitter:description").content).toBe("Testing description")
  })

  it("should contain meta tag 'og:url'", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/about" }} />)

    expect(getMetaTag("og:url").content).toBe("https://thesoreon.com/about")
  })

  it("should contain meta tag 'og:type' with default value of 'website'", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/about" }} />)

    expect(getMetaTag("og:type").content).toBe("website")
  })

  it("should contain meta tag 'og:type' with set value of 'article'", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/", customType: "article" }} />)

    expect(getMetaTag("og:type").content).toBe("article")
  })

  it("should contain meta tag 'twitter:author' with value from query", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/" }} />)

    expect(getMetaTag("twitter:creator").content).toBe("@random")
  })

  it("should contain meta tag 'og:image' with default value", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/" }} />)

    expect(getMetaTag("og:image").content).toBe("https://thesoreon.com/default.png")
    expect(getMetaTag("twitter:image").content).toBe("https://thesoreon.com/default.png")
  })

  it("should contain meta tag 'og:image' with custom value", () => {
    render(<Seo title="Test" customMetadata={{ pathname: "/", image: "custom.png" }} />)

    expect(getMetaTag("og:image").content).toBe("https://thesoreon.com/custom.png")
    expect(getMetaTag("twitter:image").content).toBe("https://thesoreon.com/custom.png")
  })
})
