module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                react: "jsx",
              },
              prompt: {
                global: true,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f01957`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130594264-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pavel Susicky's blog`,
        short_name: `pavelsusicky`,
        start_url: `/`,
        background_color: `#f33b5d`,
        theme_color: `#f33b5d`,
        display: `minimal-ui`,
        icon: `./src/assets/favicon.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
  siteMetadata: {
    description: "Personal blog by Pavel Susicky. Writing things about web development.",
    twitter: "@Thesoreon",
  },
}
