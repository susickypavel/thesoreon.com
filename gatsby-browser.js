import React from "react"
import ThemeProvider from "./src/components/theme-provider/theme-provider"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
