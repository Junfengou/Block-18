
    import dotenv from 'dotenv';

    dotenv.config({ path: '.env' }); //piping the env file in here
    
    
    export default {
        siteMetadata : {
            title: "Block18",
            siteUrl: 'https://block18.com',
            description: "The burger around town",
            twitter: '@Block18',
        },
    
        /*
            IMPORTANT NOTE TO SELF:
                next time building this project...
                    after specifying the plugins, run this command on the backend [sanity graphql deploy (name of dataset)]
                    Sanity on have their own API, we need to convert it to Gatsby's API so we can query the data
        */
        plugins: [
            'gatsby-plugin-react-helmet', // This is for page title (SEO)
            'gatsby-plugin-styled-components',
            {
              // this is the name of the plugin you are adding
              resolve: 'gatsby-source-sanity',
              options: {
                projectId: 'p2h0oi2b',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
              },
            },
            {
              resolve: `gatsby-source-stripe`,
              options: {
                objects: ["Price"],
                secretKey: 'sk_test_51I5w86L6WESAJmN2HC1h13HJAuk1b2lkBPHElBmUZ3Rv3wp9Rim13NlbAYGmvXN0HsElIBM4MQEY739yES8i7r7p00ouYgCbuL',
                downloadFiles: false,
              },
            }
          ],
    }
    
    
    