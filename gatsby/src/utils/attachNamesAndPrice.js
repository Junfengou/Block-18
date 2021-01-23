import React from 'react'
import formatMoney from "../utils/formatMoney"

function attachNamesAndPrice(order, burgers) {
    return order.map((item) => {
        // const burger = burgers.find(burger => burger._id = item._id);
        return {
            ...item,
            name: item.name,
            thumbnail: item.image.asset.fluid.src,
            price: formatMoney(item.price)
        }
    })
}

export default attachNamesAndPrice
