export {}
declare global {
  interface Window {
    __theme: "dark" | "light"
    __setPreferredTheme(theme: string): void
  }
}
