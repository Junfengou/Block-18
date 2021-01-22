import React from 'react'
import styled from "styled-components"
import bioPic from "../../images/Banner.jpg"

function Banner() {
    return (
        <BannerStyle>
            <div className="box">
                <h1>Cooking is about creating something delicious for someone else</h1>
                <p>- Ayumi Komura</p>
            </div>
        </BannerStyle>
    )
}

const BannerStyle = styled.div`
    /* border: solid blue; */
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    background: #0d0d0d;
    top: 100%;
    left: 0;
    z-index: 1;
    color: white;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 50vh, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 50vh, 0 100%);

    &::before {
        content: '';
        background: url(${bioPic}) no-repeat center center;
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        opacity: 0.4;
    }

    .box {
        /* border: solid red; */
        margin-left: 15rem;
    }

    h1 {
        position: relative;
        font-size: 4rem;
        text-align: center;
    }

    p {
        position: relative;
        font-size: 2rem;
        text-align: center;
    }


    /* background: url(${bioPic}) no-repeat center center; */
    /* object-fit: contain; */

    
`

export default Banner
