import React from 'react'
import styled from "styled-components"
import useForm from "../utils/useForm"
import OrderStyles from "../styles/OrderStyles"
import { graphql } from 'gatsby'
import OrderItem from "../components/Order/OrderItem"


const OrderItemStyles = styled.div`
    /* border: solid red; */
    display: grid;
    grid-template-columns: repeat(1, minmax(100px, 1000px));
    grid-auto-rows: 300px auto;
    /* grid-template-rows: repeat(auto-fill, minmax(100px, 1fr)); */
    gap: 2rem;
    justify-items: center;
    margin-top: 2rem;
    overflow: auto;
`

const CustomerInfoStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        margin-right: 2rem;
    }

    input {
        margin-right: 10rem;
    }

`


function order({data}) {
    const burgers = data.burgers.nodes
    const { values, updateValue } = useForm({
        name: '',
        email: ''
    })

    return (
        <form>
                <fieldset>
                    
                        <legend>Customer information</legend>
                        <CustomerInfoStyles>
                            <label htmlFor="name" >name</label>
                            <input type="text" name="name" id="name" value={values.name} onChange={updateValue} />

                            <label htmlFor="email" >email</label>
                            <input type="text" name="email" id="email" value={values.email} onChange={updateValue} />
                    </CustomerInfoStyles>
                </fieldset>

                <OrderStyles>
                    <fieldset>
                        <legend>Menu orders</legend>
                        <OrderItemStyles>
                            {burgers.map(burger => (
                                <div key={`burger - ${burger._id}`}>
                                    <OrderItem burger={burger} />
                                </div>
                            ))}
                        </OrderItemStyles>
                    </fieldset>


                    <fieldset><legend>Cart</legend></fieldset>
            </OrderStyles>

            <fieldset><legend>Total</legend></fieldset>
        </form>
    )
}

export default order
export const query = graphql`
    query BurgerOrders {
        burgers: allSanityMenu {
            nodes {
                _id
                name
                price
                image {
                    asset {
                        fluid(maxWidth: 400)
                        {
                            ...GatsbySanityImageFluid 
                        }
                    }
                }
            }
        }
    }
`

/*
{burgers.map(burger => (
                    <div key={`burger - ${burger._id}`}>
                        <Img fluid={burger.image.asset.fluid} alt={burger.name} />
                        <h2>{burger.name}</h2>
                        <p>{burger.price}</p>
                    </div>
                ))}

*/