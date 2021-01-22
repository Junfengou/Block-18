import React from 'react'
import styled from "styled-components"
import Block18 from "../Block18"

function Home() {
    return (
        <Wrapper>
            <div className="logo">
                <Block18 />
            </div>

            {/* <nav>
                <ul>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Location</li>
                </ul>
            </nav> */}

            <div className="moto">
                <h3>The best burger joint in town!</h3>
                <p>Come see us!</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    --lightblack: rgb(32, 33, 38);
    height: 100vh;
    /* width: 100vw; */
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-template-rows: repeat(3, minmax(100px, 1fr));
    background: var(--lightblack);
    /* background-size: cover; */
    background-position: top;
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
    justify-content: center;
    align-content: center;
    .logo {
        grid-row: 2/ -2;
        justify-self: center;
        /* margin-right: 10rem; */
        align-self: center;
        
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
    /* nav {
        grid-row: 2 / -3;
        justify-self: center;
        align-self: center;
        color: white;
        font-size: 3rem;
        ul {
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(3, minmax(100px, 120px));
            list-style: none;
            justify-content: center;
        }

        li {
            text-decoration: none;
        }

        li:nth-child(1)
        {
            display: grid;
            justify-content: end;
        }

        li:nth-child(2)
        {
            display: grid;
            justify-content: center;
        }

        li:nth-child(3)
        {
            display: grid;
            justify-content: start;
        }
    } */

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

        /* nav {
            grid-row:  2/ -2;

            ul {
                gap: 0px;
            }
            
            li:nth-child(1)
            {
                display: grid;
                justify-content: start;
            }

            li:nth-child(2)
            {
                display: grid;
                justify-content: start;
            }

            li:nth-child(3)
            {
                display: grid;
                justify-content: start;
            }
        } */
    }
`

export default Home
