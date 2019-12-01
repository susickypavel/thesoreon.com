import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

export interface Theme {
  actionButtons: {
    default: string
    focus: string
    icon: string
  }
}

export const ThemeProvider: React.FC = ({ children }) => {
  const theme: Theme = {
    actionButtons: {
      default: "var(--action-buttons-default)",
      focus: "var(--action-buttons-focus)",
      icon: "var(--action-buttons-icon)",
    },
  }

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
