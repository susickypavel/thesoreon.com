import { PageLayout } from "./src/components/PageLayout"
import { ThemeProvider } from "./src/components/providers/theme"

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
