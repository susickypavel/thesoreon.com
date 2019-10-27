import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

import { Theme } from "~/utils/styled"
import ThemeToggle from "./theme-toggle"

const ThemeProvider: React.FC = ({ children }) => {
  const theme: Theme = {
    bg: {
      primary: "var(--primary-bg-color)",
      secondary: "var(--primary-bg-color)",
    },
    fg: {
      primary: "var(--primary-fg-color)",
      secondary: "var(--primary-fg-color)",
      links: "",
    },
  }

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeToggle />
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
