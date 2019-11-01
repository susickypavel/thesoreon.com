import React from "react"
import { render } from "@testing-library/react"
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

import SocialMedia, { Props } from "~/components/sidebar-panel/social-media"
import ThemeProvider from "~/components/theme-provider/theme-provider"

import "@testing-library/jest-dom/extend-expect"

describe("Social Media Link", () => {
  const renderComponent = (props?: Props) => {
    return render(
      <ThemeProvider>
        <SocialMedia
          icons={[
            {
              component: FaFacebook,
              title: "Facebook",
              url: "https://facebook.com",
            },
            {
              component: FaInstagram,
              title: "Instagram",
              url: "https://instagram.com",
            },
          ]}
          {...props}
        />
      </ThemeProvider>
    )
  }

  it("should render title", () => {
    const { getByTitle } = renderComponent()

    expect(getByTitle("Facebook")).toBeInTheDocument()
  })

  it("should have href attribute of value from props", () => {
    const { container } = renderComponent({
      icons: [
        {
          component: FaFacebook,
          title: "Youtube",
          url: "https://youtube.com",
        },
      ],
    })

    const link = container.querySelector("a")

    expect(link).toHaveAttribute("href", "https://youtube.com")
  })

  it("should render icon inside link", () => {
    const { container } = renderComponent({
      icons: [
        {
          component: FaYoutube,
          title: "Youtube",
          url: "https://youtube.com",
        },
      ],
    })

    const link = container.querySelector("a")

    expect(link).toContainHTML("svg")
  })
})
