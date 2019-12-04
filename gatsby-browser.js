import { PageLayout } from "./src/components/PageLayout"
import { ThemeProvider } from "./src/components/providers/theme"
import { MdxComponentsProvider } from "./src/components/providers/mdx-components"

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <MdxComponentsProvider>
      <ThemeProvider>{element}</ThemeProvider>
    </MdxComponentsProvider>
  )
}
