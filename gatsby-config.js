module.exports = {
  siteMetadata: {"bodyBackgroundColor":"#d7ecf6","primaryColor":"#97c0d3","secondaryColor":"#424242","sidebarColor":"#eeeeee","textColor":"#616161","amazonWidthValue":80,"h1SizeValue":1,"h2SizeValue":1,"h3SizeValue":1,"headerSizeValue":1,"logoPositionValue":"50","sidebarWidthValue":"20","siteLogo":"https://firebasestorage.googleapis.com/v0/b/automatic-web-dashboard-back.appspot.com/o/JBEqCPjH5HQUBNcmUAjDr8wDW8L2%2Fthumb_480_tnlqj563fyn.png?alt=media&token=0c42ec5d-89c9-4175-8ea8-3f76484fdc76","templateWidthValue":80,"textSizeValue":1,"useAmazonSearch":true,"useFooterWidth":false,"useHeaderWhite":true,"useLogo":true,"useMenu":false,"useMenuWidth":false,"useSidebar":false,"useTransparentContentBackground":false,"genrePrincipalKeyword":"m","singularPrincipalKeyword":"patuco","pluralPrincipalKeyword":"patucos","siteDescription":"Sitio web sobre patucos","siteUrl":"https://patuquitosonline.es","siteFavicon":"https://lh3.googleusercontent.com/eYpPLaaCk47xnIwqdczqqDmAtxnZXWTZHkrb3OUDrHQOMs1eMRxwCSynu8OKSKJ8UtSM-vTvANNVZ2AiBRwr=w1920-h912","siteLanguage":"es","siteName":"Patuquitos online"},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name":"Patuquitos online","short_name":"Patuquitos online","start_url":"/","background_color":"#97c0d3","theme_color":"#97c0d3","display":"minimal-ui","icon":"src/images/favicon.png"
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-0499873288', // leave empty if you want to disable the tracker
          cookieName: 'google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/cookies`, `/goto`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
