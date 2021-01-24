import React from 'react'
import styled from "styled-components"
import bioPic from "../../images/Banner.jpg"

function Banner() {
    return (
        <BannerStyle>
            <div className="box">
                <h1>Cooking is about <span className="hightlight">creating</span> something <span className="hightlight">delicious</span> for someone else</h1>
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

    .hightlight{ 
        color: var(--red);
    }

    .box {
        /* border: solid red; */
        margin-left: 10rem;
    }

    h1 {
        position: relative;
        font-size: 4rem;
        
    }

    p {
        position: relative;
        font-size: 2rem;
        text-align: center;
    }

    @media(max-width:1200px)
    {
        .box {
            margin-left: 6rem;
        }

        h1 {
            font-size: 3rem;
        }
    }

    @media(max-width:500px)
    {
        .box {
            margin-left: 5.5rem;
        }

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.7rem;
        }
    }
    
`

export default Banner
