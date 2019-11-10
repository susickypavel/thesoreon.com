import React, { createElement } from "react"
import { MDXProvider } from "@mdx-js/react"
import ThemeProvider from "./src/components/theme-provider/theme-provider"
import {
  Heading,
  Paragraph,
  Blockquote,
  List,
  Image,
} from "./src/components/blog/md-components/index"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

const applyDarkModeClass = `
(function() {
    window.__onThemeChange = function() {};
    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.body.className = newTheme;
      window.__onThemeChange(newTheme);
    }
    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) { }
    window.__setPreferredTheme = function(newTheme) {
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {}
    }
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light')
    });
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  })
  setPreBodyComponents([script])
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider
      components={{
        h1: props => <Heading {...props} heading="h1" />,
        h2: props => <Heading {...props} heading="h2" />,
        h3: props => <Heading {...props} heading="h3" />,
        h4: props => <Heading {...props} heading="h4" />,
        h5: props => <Heading {...props} heading="h5" />,
        h6: props => <Heading {...props} heading="h6" />,
        p: props => <Paragraph {...props} />,
        blockquote: props => <Blockquote {...props} />,
        ol: props => <List listType="ol" {...props} />,
        ul: props => <List listType="ul" {...props} />,
        img: props => <Image {...props} />,
      }}
    >
      <ThemeProvider>{element}</ThemeProvider>
    </MDXProvider>
  )
}
