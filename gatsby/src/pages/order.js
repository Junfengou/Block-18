import React from "react";
import styled from "styled-components";
import useForm from "../utils/useForm";
import OrderStyles from "../styles/OrderStyles";
import { graphql } from "gatsby";
import OrderItem from "../components/Order/OrderItem";
import useBurger from "../utils/useBurger";
import BurgerCartItem from "../components/Order/BurgerCartItem";
import formatMoney from "../utils/formatMoney";
import calculateOrderTotal from "../utils/calculateOrderTotal";

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
`;

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
`;

const SubmitOrderStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	h3 {
		margin-right: 3rem;
	}

	.orderButton {
		margin-left: 2rem;
	}
`;

function order({ data }) {
	const burgers = data.burgers.nodes;
	const { values, updateValue } = useForm({
		name: "",
		email: "",
	});

	const { order, addToOrder, removeOrder, submitOrderForm, error, loading, message } = useBurger({
		burgers,
		values: values,
	});

	if(message)
	{
		return(<p>{message}</p>)
	}

	return (
		<form onSubmit={submitOrderForm}>
			<fieldset disabled={loading}>
				<legend className="mark">Customer information</legend>
				<CustomerInfoStyles>
					<label htmlFor="name">name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={values.name}
						onChange={updateValue}
					/>

					<label htmlFor="email">email</label>
					<input
						type="text"
						name="email"
						id="email"
						value={values.email}
						onChange={updateValue}
					/>
				</CustomerInfoStyles>
			</fieldset>

			<OrderStyles>
				<fieldset disabled={loading}>
					<legend className="mark">Menu orders</legend>
					<OrderItemStyles>
						{burgers.map((burger, index) => (
							<div key={`burger - ${index}`}>
								<OrderItem burger={burger} addToOrder={addToOrder} />
							</div>
						))}
					</OrderItemStyles>
				</fieldset>

				<fieldset disabled={loading}>
					<legend className="mark">Cart</legend>
					<OrderItemStyles>
						<BurgerCartItem
							order={order}
							removeOrder={removeOrder}
						/>
					</OrderItemStyles>
				</fieldset>
			</OrderStyles>

			<fieldset disabled={loading}>
				<legend className="mark">Total</legend>
				<SubmitOrderStyles>
					<h3>
						Your total is: {formatMoney(calculateOrderTotal(order))}
					</h3>
					<div>
                    	{error ? <p>{error}</p> : ''}
                	</div>
					<button className="orderButton" type="submit">{loading ? "Adding order..." : "Place an order!"}</button>
				</SubmitOrderStyles>
			</fieldset>
		</form>
	);
}

export default order;
export const query = graphql`
	query BurgerOrders {
		burgers: allSanityMenu {
			nodes {
				_id
				name
				price
				image {
					asset {
						fluid(maxWidth: 400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`;

/*
{burgers.map(burger => (
                    <div key={`burger - ${burger._id}`}>
                        <Img fluid={burger.image.asset.fluid} alt={burger.name} />
                        <h2>{burger.name}</h2>
                        <p>{burger.price}</p>
                    </div>
                ))}

*/
