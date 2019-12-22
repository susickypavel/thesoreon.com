import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

export interface Theme {
  todo?: any
}

export const ThemeProvider: React.FC = ({ children }) => {
  const theme: Theme = {}
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
