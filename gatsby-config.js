module.exports = {
  siteMetadata: {
    title: 'Leyla Mamedova | Blog',
    // siteUrl
    description: "Leyla Mamedova's personal blog about some technical stuff",
    keywords: 'Leyla.codes, personal blog, gngtgg.space, frontend, javascript',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Leyla Mamedova | Blog',
        short_name: 'Blog',
        start_url: '/',
        background_color: '#F7EEE6',
        theme_color: '#F7EEE6',
        display: 'minimal-ui',
        icon: 'static/assets/favicon-32x32.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
  ],
}
