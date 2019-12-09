import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "IBM Plex Sans",
      styles: ["400", "500", "600", "700&display=swap"],
    },
  ],
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: ["IBM Plex Sans"],
  bodyFontFamily: ["IBM Plex Sans"],
})
export default typography
