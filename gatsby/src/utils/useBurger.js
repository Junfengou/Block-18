import React, { useContext, useState } from 'react'
import BurgerContext from "../components/context/BurgerOrderContext"
import attachNamesAndPrice from "./attachNamesAndPrice"
import calculateOrderTotal from "./calculateOrderTotal"
import formatMoney from "./formatMoney"

import getStripe from "../utils/stripe"

function useBurger ({ burgers, values }){
    const [order, setOrder] = useContext(BurgerContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [message, setMessage] = useState('');

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

    async function submitOrderForm(e) {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const totalPrice = formatMoney(calculateOrderTotal(order));
        const body = {
            order: attachNamesAndPrice(order, burgers),
            total: totalPrice,
            name: values.name,
            email: values.email,
        }

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/mailSender`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const text = JSON.parse(await res.text());

        if(res.status >= 400 && res.status < 600)
        {
            setLoading(false);
            setError(text.message);
        }
        else
        {
            setLoading(false);
            setMessage("Success! Thank you for ordering from Block18 official website!");
        }
        

    }
    return { order, addToOrder, removeOrder, submitOrderForm, error, loading, message }
}

export default useBurger


/*

const totalPrice = formatMoney(calculateOrderTotal(order));
        const stripe = await getStripe();

       const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: [{ price: totalPrice, quantity: 1 }],
            successUrl: `${window.location.origin}/page-2/`,
            cancelUrl: `${window.location.origin}/advanced`,
        })

        if(error)
        {
            console.warn("Error", error);
            setLoading(false)
        }





*/