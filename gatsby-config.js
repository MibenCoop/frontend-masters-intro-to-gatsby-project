module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.myDomain.tld',
        title: 'Blog or now blog?',
        description: 'Learning how to create blog using gatsby',
        image: 'https://unsplash.com/photos/BMjIAyTl2ec'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-remark-images',
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'images',
            path: `${__dirname}/src/images`,
          },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-fontawesome-css'
      ]
}