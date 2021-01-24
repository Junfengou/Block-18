import React from "react";
import styled from "styled-components";

function OrderMessage({ message, name, price }) {
	console.log("price", price);
	return (
		<OrderMessageStyles>
			<p>{message}</p>
			<p>
				Thank you <span>{name}</span> for your business!
			</p>
			<p>
				Your total is <span>{price}</span>
			</p>
			<p>
				If there is anything we can improve on, do let us know at{" "}
				<span>
					<strong>block18@superhotburgers.com</strong>
				</span>
			</p>
		</OrderMessageStyles>
	);
}

const OrderMessageStyles = styled.div`
	/* border: solid red; */
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
	justify-items: center;
	text-align: center;

	span {
		color: var(--red);
	}
`;

export default OrderMessage;
