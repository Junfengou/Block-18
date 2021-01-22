import React from 'react'
import Home from "../components/Home/Home"
import Options from "../components/Home/Options"
import { graphql } from "gatsby"

function index({ data: { burgers } }) {
    
    return (
        <div>
            <Home />
            <Options  burgers={burgers} />
        </div>
    )
}

export default index

export const query = graphql`
    query {
        burgers: allSanityMenu {
            nodes {
                image {
                    asset {
                        fluid(maxWidth: 200)
                        {
                            ...GatsbySanityImageFluid 
                        }
                    }
                }
            }
        }
    }
`