import React from 'react'
import styled from "styled-components"
import Norris from "../../images/bike.png"

function History() {
    return (
        <HistoryStyles>
            <div className="history">
                <p><span className="w">W</span>e’ve been cooking together long enough that we know how to balance each other–comfort meets freshness.</p>
                <h2>ONE OF US SAYS, “<span className="highlight">JUICY BURGER</span>?” THE OTHER RESPONDS, “YEAH! AND SOME ROASTED BEETS AND GOAT CHEESE!”</h2>
                <p>We met in <span className="highlight">Metropolitan Community College’s </span>Culinary program, which was a great place to earn our credentials 
                    and broaden our network of friends, chefs, and fellow foodies. But we both agree our ongoing education has 
                    been and will always be through <span className="highlight">travel</span>. We travel whenever we have the chance, and sometimes we’ll plan a trip 
                    around reservations at a specific restaurant. We’ve had some amazing meals and some great adventures, 
                    and it all shows up in the food we serve.</p>
            </div>

            <div className="bird">
                <img src={Norris} alt="norris" />
                <h5>WE NEVER TAKE OURSELVES TOO <span className="highlight">SERIOUSLY</span>. </h5>
            </div>

            <div className="history">
                
                <p>We love the <span className="highlight">creative</span> experimentation that comes from mixing “high” and “low” food concepts. 
                    Recently we offered the <span className="highlight">“Ethan Special”</span> based on Paul’s 10-year-old nephew’s lunch–white bread, bologna, mayo, 
                    cheese, with smashed Doritos.We offered a slightly scaled up version that included Grey Plume’s mortadella served with slaw
                    on an onion roll and – for those who wanted it “Ethan Style” – Doritos on the side.”</p>

                <p>Maybe we’ll introduce a customer to a new food preparation they wouldn’t have tried before. 
                    Maybe we’ll remove some of the pretension associated with fine dining. Or maybe we’ll just leave 
                    you with a full belly and a <span className="highlight">great memory</span>.</p>
            </div>
        </HistoryStyles>
    )
}

const HistoryStyles = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        padding: 2rem;
        font-size: 2.1rem;

        .highlight {
            color: var(--red);
        }

        .w {
            font-size: 10rem;
        }

        .history {
            max-width: 800px;
            padding: 2rem;
            margin-top: 1rem;

        }

        .bird {
            /* border: solid pink; */
            display: grid;
            grid-template-columns: 350px;
            grid-template-rows: 350px;

            
        }
`

export default History
