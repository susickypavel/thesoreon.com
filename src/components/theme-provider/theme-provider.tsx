import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

import { Theme } from "~/utils/styled"
import ThemeToggle from "./theme-toggle"

const ThemeProvider: React.FC = ({ children }) => {
  const theme: Theme = {
    bg: {
      primary: "var(--primary-bg-color)",
      secondary: "var(--secondary-bg-color)",
    },
    fg: {
      primary: "var(--primary-fg-color)",
      secondary: "var(--secondary-fg-color)",
      links: "var(--links-color)",
    },
    transitionTheme: "color, background-color 0.5s ease",
  }

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeToggle />
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
