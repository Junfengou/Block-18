import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image"
import formatMoney from "../../utils/formatMoney"

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

function OrderItem({burger}) {
    return (
        <BurgerItemStyles>

            <div className="pic">
                <Img fluid={burger.image.asset.fluid} alt={burger.name} />
            </div>
            
            <div className="name">
                <p>{burger.name}</p>
                <p>{formatMoney(burger.price)}</p>
            </div>

            <div className="price">
                <button>Add to cart</button>
            </div>
        </BurgerItemStyles>
    )
}

export default OrderItem
