const path = require("path")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: false, // @default value
        jsxPragma: `React`, // @default value
        allExtensions: false, // @default value
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true, // @default value
        autoLabel: process.env.NODE_ENV !== "production", // @default value
        labelFormat: "[local]", // @default value
        cssPropOptimization: true, // @default value
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.ts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `content`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
