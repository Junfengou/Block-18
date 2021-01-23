import React from 'react'
import styled from "styled-components"
import Block18 from "../Block18"

function Home() {
    return (
        <Wrapper>
            <div className="logo">
                <Block18 />
            </div>


            <div className="moto">
                <h3>The best <span className="burger">burger</span> joint in town!</h3>
                <p>Come see us!</p>
                <p><span className="week">M - F </span> | <span className="day"> 6 PM - 11 PM</span></p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    --lightblack: rgb(32, 33, 38);
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-template-rows: repeat(3, minmax(100px, 1fr));
    background: var(--lightblack);
    background-position: top;
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
    justify-content: center;
    align-content: center;
    
    .burger{
        color: var(--red);
    }

    .week {
        color: #6186BD;
        
    }

    .day {
        color: #a18cd1
    }

    .logo {
        grid-row: 2/ -2;
        justify-self: center;
        align-self: center;
        text-align: center;
    }


   .moto {
        grid-row: 2 / -3;
        justify-self: center;
        align-self: center;
        color: white;
        font-size: 3rem;
        text-align: center;
        font-size: clamp(20px, 5vw, 28px);
   }

    @media(max-width: 800px)
    {
        display: grid;
        grid-template-columns: repeat(1, minmax(100px, 400px));
        grid-template-rows: repeat(2, minmax(100px, 200px));

        .logo {

            grid-row: span 1 / 2;
        }

        .moto {
            grid-row:  2/ -2;
            margin-top: 10rem;
        }

    }

    @media(max-width: 550px) {
        .moto {
            font-size: 2rem;
        }
    }
`

export default Home
