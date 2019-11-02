export {}
declare global {
  interface Window {
    __theme: "dark" | "light"
    __setPreferredTheme(theme: string): void
    __onThemeChange(theme: string): void
  }
}

declare module "@mdx-js/react" {
  import * as React from "react"
  type ComponentType =
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "thematicBreak"
    | "blockquote"
    | "ul"
    | "ol"
    | "li"
    | "table"
    | "tr"
    | "td"
    | "pre"
    | "code"
    | "em"
    | "strong"
    | "delete"
    | "inlineCode"
    | "hr"
    | "a"
    | "img"
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>
  }
  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
