import React, { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { IconType } from "react-icons/lib/cjs"

import { ThemeToggleButton } from "./styles"

const createIcon = ({ icon, color }: State) => React.createElement(icon, { size: "3rem", color })

interface State {
  icon: IconType
  color: string
  theme: "dark" | "light"
}

const lightThemeValues: State = { theme: "light", icon: FaSun, color: "yellow" }
const darkThemeValues: State = { theme: "dark", icon: FaMoon, color: "white" }

export const ThemeToggle: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<State>(lightThemeValues)

  const handleClick = () => {
    setActiveTheme(() => {
      const toggledValues: State = activeTheme.theme === "dark" ? lightThemeValues : darkThemeValues
      window.__setPreferredTheme(toggledValues.theme)
      return toggledValues
    })
  }

  useEffect(() => {
    setActiveTheme(window.__theme === "dark" ? darkThemeValues : lightThemeValues)
  }, [])

  return (
    <ThemeToggleButton aria-label="Switch theme" onClick={handleClick}>
      {createIcon(activeTheme.theme === "dark" ? darkThemeValues : lightThemeValues)}
    </ThemeToggleButton>
  )
}
