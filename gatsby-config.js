module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:300,400`,
          `source sans pro:300,400,400i,700`,
          `BioRhyme`,
          `serif`,
          `Space Mono`,
          `monospace`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mosta Saloon`,
        short_name: `Mosta`,
        start_url: `https://mostatest.netlify.app/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
