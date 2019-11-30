import React, { useState, useEffect } from "react"

export const ThemeToggle: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState("light")

  const handleClick = () => {
    setActiveTheme(() => {
      const themeToToggle = activeTheme === "light" ? "dark" : "light"
      window.__setPreferredTheme(themeToToggle)
      return themeToToggle
    })
  }

  useEffect(() => {
    setActiveTheme(window.__theme === "dark" ? "dark" : "light")
  }, [])

  return (
    <div>
      <button aria-label="Switch theme" onClick={handleClick}>
        Toggle
      </button>
    </div>
  )
}
