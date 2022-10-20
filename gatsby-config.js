module.exports = {
  siteMetadata: {
    title: "Altmeta Pixel Demo",
    siteUrl: "https://darenleongzy.github.io/pixel-site/",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        facebookPixel: {
          pixelId: "1084668272235035",
          cookieName: "cookie-consent",
        },
        environments: ["production", "development"],
      },
    },
  ],
};
