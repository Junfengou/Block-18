import React from 'react'
import Norris from "../../images/norris.png"
import Img from "gatsby-image"
import styled from "styled-components";
import { Link } from "gatsby"
import Cinna from "../../images/cinna.png"
import Bird from "../../images/bird.png"
import Bites from "../../images/bites.png"

function Options({burgers}) {
    const burger = burgers.nodes[0].image.asset.fluid;
    // console.log(burger)
    return (
        <OptionStyles>
            <Img fluid={burger}  alt="grg"/>
            <div className="wrapper">
            <div className="specials">
                <div className="specials_picture">
                    <img src={Norris} alt="Norris" />

                </div>

                <div className="specials__tag">
                    <h2><span className="daily">Daily Special</span></h2>
                    <p>We serve a new special every day. Head over to Facebook and see what we're serving today!</p>
                </div>

                <div className="specials__follow">
                   <p>Follow us on facebook! 📱</p>
                </div>
                
            </div>
            <div className="options">
            <div className="cardZero">

                <div className="card">
                    <div className="card__title">
                        <h2>Roll up</h2>
                        <h4>your sleeves</h4>
                    </div>
                    <p>Our street-style food is bold, imaginative, and deliciously messy. Grab some napkins and eat up.</p>
                    <Link to="/menu"><h4 className="mark">SEE MENU</h4></Link>
                </div>
            </div>

            <div className="cardOne">
            <div className="card">
                    <div className="card__title">
                    <h2>real</h2>
                        <h4>local food</h4>
                    </div>
                    <p>We use locally sourced ingredients, avoid preservatives whenever possible, and offer vegan-friendly dishes.</p>
                    <Link to="/about"><h4 className="mark">ABOUT US</h4></Link>
                </div>
            </div>

            <div className="cardTwo">
            <div className="card">
                    <div className="card__title">
                        <h2>Free High Fives</h2>
                        <h4>all around</h4>
                    </div>
                    <p>We use locally sourced ingredients, avoid preservatives whenever possible, and offer vegan-friendly dishes.</p>
                    <Link to="/order"><h4 className="mark">ORDER</h4></Link>
                </div>
            </div>

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

    .daily {
        color: #2b2d42;
    }

    a {
        text-decoration: none;
    }

    .wrapper {
        display: grid;
        grid-template-rows: 1fr 2fr;
        grid-template-columns: 1fr;
        /* border: solid red; */
        max-width: 1000px;
        height: 90%;
        justify-content: center;
        align-items: center;
    }

    .specials {
        grid-row: span 1;
        border: solid 2px var(--lightblack);
        display: grid;
        grid-template-areas: 
        "hero cta1"
        "hero cta2";
        /* grid-template-columns: 250px 1fr;
        grid-template-rows: 1fr 1fr; */
        grid-template-columns: repeat(auto-fit, minmax(100px, 200px 1fr));
        grid-template-rows: repeat(auto-fit, minmax(100px, 1fr 100px));
        margin-bottom: 2rem;
        padding: 2rem;
        background: white;

        
        .specials_picture{
            grid-area: hero;
            justify-self: center;
            align-self: center; 
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
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
            gap: 2.5rem;
            justify-items: center;
            align-items: center;
            list-style: none;
            

        .cardZero {
            grid-area: card0;
            position: relative;

            &::before {
                content: '';
                background: url(${Bites}) center no-repeat;
                position: absolute;
                top: 0px;
                left: 0px;
                bottom: 0px;
                right: 0px;
                opacity: 0.2;
                z-index: 1;
            }
        }

        .cardOne {
            grid-area: card1;
            position: relative;

            &::before {
                content: '';
                background: url(${Bird}) center no-repeat;
                position: absolute;
                top: 0px;
                left: 0px;
                bottom: 0px;
                right: 0px;
                opacity: 0.2;
                z-index: 1;
            }
        }

        .cardTwo {
            grid-area: card2;
            position: relative;

            &::before {
                content: '';
                background: url(${Cinna}) center no-repeat;
                position: absolute;
                top: 0px;
                left: 0px;
                bottom: 0px;
                right: 0px;
                opacity: 0.2;
                z-index: 1;
            }
        }

        .card {
            border: solid 3px var(--lightblack);
            width: 100%;
            height: 40rem;
            display: grid;
            grid-template-rows: repeat(3, minmax(100px, 1fr));
            justify-items: center;
            align-items: center;
            background: white;
            

            p {
                font-size: clamp(12px, 5vw, 20px);
                text-align: center;
                padding: 2rem;
                z-index: 2;
            }
        }

        .card__title {
            text-transform: uppercase;
            text-align: center;
        }
       
        
    }

    @media(max-width:900px)
    {
        text-align: center;
        .specials {
        grid-template-areas: 
        "hero "
        "cta1"
        "cta2";
        }

        .options {
            grid-template-areas: 
            "card0 " 
            "card1" 
            "card2";
        }
    }
`

export default Options

