import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Segoe UI",
      styles: ["400", "500", "600", "700"],
    },
  ],
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Segoe UI"],
  bodyFontFamily: ["Segoe UI"],
})
export default typography
