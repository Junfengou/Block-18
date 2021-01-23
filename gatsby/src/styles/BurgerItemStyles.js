import styled from "styled-components"

const BurgerItemStyles = styled.div`
    /* border: solid blue; */
    display: grid;
    grid-template-areas: 
    "pic    burgerName"
    "pic    price";
    grid-template-columns: 300px 200px;
    /* grid-template-rows: 1fr 1fr; */
    grid-template-rows: subgrid;
    /* border: solid red; */

 
    .pic {
        grid-area: pic;
        
    }

    .name {
        grid-area: burgerName;
        margin-left: 2rem;
    }

    .button__container {
        grid-area: price;
        margin-left: 2rem;
    }

    @media(max-width: 700px)
    {
        grid-template-columns: 250px 100px;

        .name {
            font-size: 1.5rem;
        }

        button {
            height: 4rem;
            width: 10rem;
            font-size: 1.5rem;
        }
    }

    @media(max-width: 540px)
    {
        grid-template-columns: 230px 80px;
        /* border: solid blue; */

        .name {
            font-size: 1.2rem;
        }

        button {
            height: 4rem;
            width: 8rem;
            font-size: 1rem;
        }
    }

    @media(max-width: 480px)
    {
        grid-template-columns: 170px 100px;

        button {
            height: 3rem;
            width: 7rem;
            font-size: 0.9rem;
        }
    }
`

export default BurgerItemStyles;