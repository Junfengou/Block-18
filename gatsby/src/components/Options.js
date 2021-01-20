import React from 'react'
import Mahi from "../images/mahi.jpg"
import styled from "styled-components";

function Options() {
    return (
        <OptionStyles>
            <div className="wrapper">
            <div className="specials">
                <div className="specials_picture">
                    <img src={Mahi} alt="mahi" />
                </div>

                <div className="specials__tag">
                    <h2>Daily Special</h2>
                    <p>We serve a new special every day. Head over to Facebook and see what we're serving today!</p>
                </div>

                <div className="specials__follow">
                   <p>Follow us on facebook! 📱</p>
                </div>
                
            </div>
            <div className="options">
            <div className="cardZero">cardZero</div>
            <div className="cardOne">cardOne</div>
            <div className="cardTwo">cardTwo</div>
            </div>
            </div>
        </OptionStyles>
    )
}

const OptionStyles = styled.div`
    --lightblack: rgb(207, 207, 207);
    height: 100vh;
    /* max-width: 1000px; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr 2fr;

    .wrapper {
        display: grid;
        grid-template-rows: 1fr 2fr;
        grid-template-columns: 1fr;
        border: solid red;
        max-width: 1000px;
        height: 90%;
        justify-content: center;
        align-items: center;
    }

    .specials {
        grid-row: span 1;
        border: solid 2px var(--lightblack);
        border-radius: 10px;
        display: grid;
        grid-template-areas: 
        "hero cta1"
        "hero cta2";
        /* grid-template-columns: 250px 1fr;
        grid-template-rows: 1fr 1fr; */
        grid-template-columns: repeat(2, minmax(100px, 200px 1fr));
        grid-template-rows: repeat(2, minmax(100px, 1fr 100px));
        margin: 6rem;
        background: white;
        
        .specials_picture{
            grid-area: hero;
            justify-self: center;
            align-self: center; 
            margin-left: 2rem;
        }

        .specials__tag {
            grid-area: cta1;
            margin: 1rem;
            margin-left: 2rem;
            
            
        }

        .specials__follow {
            grid-area: cta2;
            justify-self: center;
            align-self: center; 
        }
       
    }
    

    .options {
            display: grid;
            grid-template-areas: 
            "card0 card1 card2"
            "card0 card1 card2";
            grid-template-columns: repeat(3, minmax(100px, 1fr));
            grid-template-rows: repeat(2, minmax(100px, 1fr));
            justify-items: center;
            align-items: center;
            list-style: none;

        .cardZero {
            grid-area: card0;
        }

        .cardOne {
            grid-area: card1;
        }

        .cardTwo {
            grid-area: card2;
        }

        
       
        
    }

    @media(max-width:700px)
    {
        .specials {
        grid-template-areas: 
        "hero "
        "cta1"
        "cta2";
        }
    }
`

export default Options

/*
<div className="specials"><p>Woah</p></div>
            <div className="options">
                <ul>
                    <li>taco</li>
                    <li>taco</li>
                    <li>taco</li>
                </ul>
            </div>

*/