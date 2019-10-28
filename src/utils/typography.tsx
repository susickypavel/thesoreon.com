import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["400", "500", "600", "700"],
    },
  ],
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Open Sans"],
  bodyFontFamily: ["Open Sans"],
})
export default typography
