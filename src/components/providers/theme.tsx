import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

export interface Theme {
  actionButtons: {
    default: string
    focus: string
    icon: string
  }
  blogPreview: {
    boxshadow: string
  }
  bg: {
    secondary: string
  }
  links: {
    default: string
    focus: string
    visited: string
    text: string
  }
}

export const ThemeProvider: React.FC = ({ children }) => {
  const theme: Theme = {
    actionButtons: {
      default: "var(--action-buttons-default)",
      focus: "var(--action-buttons-focus)",
      icon: "var(--action-buttons-icon)",
    },
    blogPreview: {
      boxshadow: "var(--blog-preview-boxshadow)",
    },
    bg: {
      secondary: "var(--secondary-bg-color)",
    },
    links: {
      default: "var(--links-default)",
      focus: "var(--links-focus)",
      visited: "var(--links-visited)",
      text: "var(--links-text)",
    },
  }

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
