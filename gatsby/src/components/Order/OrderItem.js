import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image"
import formatMoney from "../../utils/formatMoney"
import BurgerItemStyles from "../../styles/BurgerItemStyles"


function OrderItem({burger, addToOrder} ) {
    // console.log(burger)
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
                <button type="button" onClick={() => addToOrder(burger)}>Add to cart</button>
            </div>
        </BurgerItemStyles>
    )
}

export default OrderItem
