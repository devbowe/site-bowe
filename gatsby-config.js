require("dotenv").config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Bowe - Business Performance - marketing, vendas, tecnologia, analytics, processos.`,
    description: `Somos uma empresa de geração de demanda e transformação de negócios no mundo digital.`,
    metaImg: `src/assets/img/favIconBowe.png`,
    author: `BOWE`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Syne\:400i,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#222137`,
        theme_color: `#222137`,
        display: `minimal-ui`,
        icon: `src/assets/img/favIconBowe.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
  ],
}
