const colors: any = {
  javascript: { background: "#F0DB4F", foreground: "#323330" },
  typescript: { background: "#007acc", foreground: "white" },
  react: { background: "#61DBFB", foreground: "black" },
  angular: { background: "#b52e31", foreground: "white" },
  vue: { background: "#41B883", foreground: "#34495E" },
}

export interface TagColor {
  background: string
  foreground: string
}

export function getTagColor(tag: string): TagColor {
  return colors[tag] || { background: "gray", foreground: "white" }
}
