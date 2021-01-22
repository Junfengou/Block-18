import React from 'react'
import styled from "styled-components"

function History() {
    return (
        <HistoryStyles>
            <p><span>W</span>e’ve been cooking together long enough that we know how to balance each other–comfort meets freshness.</p>
            <h2>ONE OF US SAYS, “JUICY BURGER?” THE OTHER RESPONDS, “YEAH! AND SOME ROASTED BEETS AND GOAT CHEESE!”</h2>
            <p>We met in Metropolitan Community College’s Culinary program, which was a great place to earn our credentials 
                and broaden our network of friends, chefs, and fellow foodies. But we both agree our ongoing education has 
                been and will always be through travel. We travel whenever we have the chance, and sometimes we’ll plan a trip 
                around reservations at a specific restaurant. We’ve had some amazing meals and some great adventures, 
                and it all shows up in the food we serve.</p>

        </HistoryStyles>
    )
}

const HistoryStyles = styled.div`
        /* border: solid blue; */
        height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        /* margin: 2rem */
        padding: 2rem;
        /* -webkit-clip-path: polygon(0 0, 100% 0, 100% 21vh, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 21vh, 0 100%); */
`

export default History
