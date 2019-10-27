import React, { useState, useEffect, ChangeEvent } from "react"

import Switch from "../Switch"

const ThemeToggle: React.FC = () => {
  const [defaultCheck, setCheck] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    window.__setPreferredTheme(e.target.checked ? "dark" : "light")
  }

  useEffect(() => {
    setCheck(window.__theme === "dark")
  }, [])

  return (
    <Switch
      id="theme-toggle"
      label="Switch between dark and light theme"
      handleCheck={defaultCheck}
      onChange={handleChange}
    />
  )
}

export default ThemeToggle
