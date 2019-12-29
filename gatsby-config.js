module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: false, // @default value
        jsxPragma: `React`, // @default value
        allExtensions: false // @default value
      }
    }
  ]
};
