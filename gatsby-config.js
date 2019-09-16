const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Learning Firebase`,
    description: `Learning how to use firebase`,
    author: `Moshe Morris`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-root-import',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-svgr',

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: '/src/assets/img/',
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        // Node Modules
        FontAwesome: path.join(
          __dirname,
          'node_modules/@fortawesome/react-fontawesome'
        ),

        // SRC
        SRC: path.join(__dirname, 'src'),

        // Main Folders
        Assets: path.join(__dirname, 'src/assets'),
        Components: path.join(__dirname, 'src/components'),
        Config: path.join(__dirname, 'src/config'),
        Layouts: path.join(__dirname, 'src/layouts'),
        Pages: path.join(__dirname, 'src/pages'),
        Plugins: path.join(__dirname, 'src/plugins'),
        Styles: path.join(__dirname, 'src/styles'),
        Utilities: path.join(__dirname, 'src/utilities'),

        // Assets
        Images: path.join(__dirname, 'src/assets/img'),

        // Styles
        Brands: path.join(__dirname, 'src/styles/helpers/brands'),
        Elevation: path.join(__dirname, 'src/styles/helpers/elevation'),
        Global: path.join(__dirname, 'src/styles/global'),
        Helpers: path.join(__dirname, 'src/styles/helpers'),
        Material: path.join(__dirname, 'src/styles/helpers/material-colors'),
        Responsive: path.join(__dirname, 'src/styles/helpers/responsive'),
        Theme: path.join(__dirname, 'src/styles/theme'),
        Variables: path.join(__dirname, 'src/styles/variables'),

        // Utilities
        Classes: path.join(__dirname, 'src/utilities/classes'),
        Context: path.join(__dirname, 'src/utilities/context'),
        Functions: path.join(__dirname, 'src/utilities/functions'),
        Hooks: path.join(__dirname, 'src/utilities/hooks'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
  ],
}
