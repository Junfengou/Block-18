import React from 'react'
import styled from "styled-components"

const LogoStyles = styled.div`
    /* border: solid  red; */
    height: 20rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .year {
        color: var(--red);
    }

    .inner {
        display: flex;
        flex-direction: column;
        border: 1px solid white;
        height: 20rem;
        width: 20rem;
        justify-content: space-evenly;
        align-items: center;

    }

    .block {
        width: 100%;
        display: flex;
        justify-content: center;
        
    }

    .letter {
        font-size: 2.6em;
        color: var(--red);
        --scale: 1;
        --rotate: -10deg;
        --translateX: 0;
        --translateY: 0;
        --rotateX: 0deg;
        transform: scale(var(--scale)) rotate(var(--rotate))
        translateX(var(--translateX)) translateY(var(--translateY))
        rotateX(var(--rotateX));
        display: inline-block;
        line-height: 1;
        transition: transform 0.3s;

        &.B {
            /* --translateX: -0.10; */
        }

        &.l {
            --rotate: 10deg;
            --scale: 1;
            --translateX: 0.05em;
            --translateY: -0.05em;
        }

        &.o {
            --scale: 0.9;
            --rotate: -10deg;
            --translateY: 0em;
            --translateX: 0em;
        }

        &.c {
            --rotate: 12deg;
            --scale: 0.8;
            --translateX: 0em;
            --translateY: 0.1em;
        }

        &.k {
            --rotate: -12deg;
            --scale: 0.9;
            --translateX: 0em;
            --translateY: 0em;
        }

        &.i {
            --rotate: 1deg;
            --scale: 0.6;
            --translateX: 0.1em;
            --translateY: 0.2em;
        }

        &.e {
            --rotate: 10deg;
            --scale: 0.6;
            --translateX: -0.2em;
            --translateY: 0.2em;
        }
    }

    .est {
        font-size: 2.5rem;
        margin-left: 6rem;
        color: white;
        align-self: center;
    }

    @media(max-width: 900px)
    {
        .inner {
            border: 1px solid white;
            height: 15rem;
            width: 15rem;
            }

        .letter{
            font-size: 2em;
        }

        .est {
        font-size: 2rem;
        /* margin-left: 15rem; */
        margin-left: 5rem;
        color: white;
        align-self: center;
        }
    }

    @media(max-width: 400px)
    {
        .inner {
            border: 1px solid white;
            height: 13rem;
            width: 13rem;
            }

        .letter{
            font-size: 1.7em;
        }

        .est {
            font-size: 1.7rem;
            /* margin-left: 15rem; */
            margin-left: 5rem;
            color: white;
            align-self: center;
        }
    }
    
`



function Block18() {
    return (
        <LogoStyles className="blockLogo">
            <div className="inner">
                <h1>
                <span className="block">
                    <span className="letter B">B</span>
                    <span className="letter l">l</span>
                    <span className="letter o">o</span>
                    <span className="letter c">c</span>
                    <span className="letter k">k</span>
                    <span className="letter i">1</span>
                    <span className="letter e">8</span>
                </span>
                    <span className="est">EST <span className="year">1994</span></span>
                 </h1>
            </div>
        </LogoStyles>
    )
}


export default Block18

