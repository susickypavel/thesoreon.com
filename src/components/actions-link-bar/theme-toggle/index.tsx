import React, { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

import { ThemeToggleButton } from "./styles"

const icons: any = {
  dark: <FaMoon size="3rem" color="yellow" />,
  light: <FaSun size="3rem" color="white" />,
}

export const ThemeToggle: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light")

  const handleClick = (e: any) => {
    e.currentTarget.blur()
    setActiveTheme(() => {
      const toggledTheme = activeTheme === "dark" ? "light" : "dark"
      window.__setPreferredTheme(toggledTheme)
      return toggledTheme
    })
  }

  useEffect(() => {
    setActiveTheme(window.__theme)
  }, [])

  return (
    <ThemeToggleButton aria-label="Switch theme" onClick={handleClick}>
      {icons[activeTheme]}
    </ThemeToggleButton>
  )
}
