import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

export interface Theme {
  anchorLinks: {
    default: string
    focus: string
  }
}

export const ThemeProvider: React.FC = ({ children }) => {
  const theme: Theme = {
    anchorLinks: {
      default: "var(--anchor-links-default)",
      focus: "var(--anchor-links-focus)",
    },
  }

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
