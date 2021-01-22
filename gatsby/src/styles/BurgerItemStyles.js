import styled from "styled-components"

const BurgerItemStyles = styled.div`
    /* border: solid blue; */
    display: grid;
    grid-template-areas: 
    "pic    burgerName"
    "pic    price";
    grid-template-columns: 350px 200px;
    /* grid-template-rows: 1fr 1fr; */
    grid-template-rows: subgrid;


    .pic {
        grid-area: pic;
        
    }

    .name {
        grid-area: burgerName;
        margin-left: 2rem;
    }

    .price {
        grid-area: price;
        margin-left: 2rem;
    }
`

export default BurgerItemStyles;