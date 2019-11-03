import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

import { Theme } from "~/utils/styled"

const ThemeProvider: React.FC = ({ children }) => {
  const theme: Theme = {
    bg: {
      primary: "var(--primary-bg-color)",
      secondary: "var(--secondary-bg-color)",
    },
    fg: {
      primary: "var(--primary-fg-color)",
      secondary: "var(--secondary-fg-color)",
      defaultColor: "var(--default-color)",
    },
    linksColors: {
      default: "var(--links-color)",
      focus: "var(--links-focus-color)",
      visited: "var(--links-visited-color)",
    },
    transitionTheme: "color, background-color 0.5s ease",
  }

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}

export default ThemeProvider
