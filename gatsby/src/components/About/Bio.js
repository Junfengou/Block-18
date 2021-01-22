import React from 'react'
import styled from "styled-components"
import Banner from "./Banner"
import History from "./History"

function Bio() {
    return (
        <BioStyles>
            <Banner />
            <History />
        </BioStyles>
    )
}

const BioStyles = styled.div`
    
`

export default Bio

/*
-webkit-clip-path: polygon(0 0, 100% 0, 100% 10vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 50vh, 0 100%);
    

    border: solid red;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
*/