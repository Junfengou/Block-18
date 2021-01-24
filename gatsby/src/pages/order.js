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

import OrderMessage from "../components/Order/OrderMessage";
const OrderItemStyles = styled.div`
	/* border: solid red; */
	display: grid;
	grid-template-columns: repeat(1, minmax(100px, 1000px));
	grid-auto-rows: 200px 1fr;
	/* grid-template-rows: repeat(auto-fill, minmax(100px, 1fr)); */
	gap: 2rem;
	justify-items: center;
	margin-top: 2rem;
	overflow: auto;

	@media (max-width: 700px) {
		grid-auto-rows: 170px 1fr;
		overflow: auto;
	}

	@media (max-width: 470px) {
		grid-auto-rows: 125px 1fr;
		overflow: auto;
	}
`;

const CustomerFormStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	/* grid-template-rows: 1fr 1fr; */

	.inputForm {
		display: grid;
		justify-self: center;
	}

	.mapleSyrup {
		display: none;
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

	@media (max-width: 515px) {
		h3 {
			font-size: 1.5rem;
		}

		button {
			height: 3.8rem;
			width: 10rem;
			font-size: 1.3rem;
		}
	}
`;

function order({ data }) {
	const burgers = data.burgers.nodes;
	const { values, updateValue } = useForm({
		name: "",
		email: "",
		mapleSyrup: "", //This is for bots lol
	});

	const {
		order,
		addToOrder,
		removeOrder,
		submitOrderForm,
		error,
		loading,
		message,
	} = useBurger({
		burgers,
		values: values,
	});

	if (message && values.name) {
		return (
			<OrderMessage
				message={message}
				name={values.name}
				price={formatMoney(calculateOrderTotal(order))}
			/>
		);
	}

	return (
		<form onSubmit={submitOrderForm}>
			<CustomerFormStyles>
				<fieldset disabled={loading}>
					<legend className="mark">Customer information</legend>
					<div className="inputForm">
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

						{/* This is honey pot. A trap built for robots. The field is only visible to bots via css so nothing to worry about */}
						<input
							type="mapleSyrup"
							className="mapleSyrup"
							name="mapleSyrup"
							id="mapleSyrup"
							value={values.mapleSyrup}
							onChange={updateValue}
						/>
					</div>
				</fieldset>
			</CustomerFormStyles>

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
						<BurgerCartItem order={order} removeOrder={removeOrder} />
					</OrderItemStyles>
				</fieldset>
			</OrderStyles>

			<fieldset disabled={loading}>
				<legend className="mark">Total</legend>
				<SubmitOrderStyles>
					<h3>Your total is: {formatMoney(calculateOrderTotal(order))}</h3>
					<div>{error ? <p>{error}</p> : ""}</div>
					<button className="orderButton" type="submit">
						{loading ? "Adding order..." : "Place an order!"}
					</button>
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
