import React, { useContext, useState } from 'react'
import BurgerContext from "../components/context/BurgerOrderContext"

function useBurger ({ burgers, values }){
    const [order, setOrder] = useContext(BurgerContext);
    // const [order, setOrder] = useState([]);

    function addToOrder(burgerOrder)
    {
        setOrder([...order, burgerOrder]);
    }

    function removeOrder(index)
    {
        setOrder([
            ...order.slice(0, index),
            ...order.slice(index + 1)
        ])
    }

    return { order, addToOrder, removeOrder }
}

export default useBurger
