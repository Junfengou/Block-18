import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

function Menu({ burger }) {
	return (
		<PizzaStyles>
			<div className="imag">
				<Img fluid={burger.image.asset.fluid} alt={burger.name} />
			</div>
			<div className="description">
				<h3 className="mark">{burger.name}</h3>
				<hr />
				<p>{burger.description}</p>
			</div>
			{/* <button type="button">Add to order</button> */}
		</PizzaStyles>
	);
}

const PizzaStyles = styled.div`
	display: grid;
	grid-template-rows: subgrid;
	grid-row: span 1;
	gap: 1rem;
	margin-top: 3rem;

	.description {
		justify-self: center;
		height: 20rem;
		/* border: solid red; */
		padding: 2rem;
	}

	p {
		margin: 0;
		text-align: center;
	}

	hr {
		width: 40%;
	}

	
`;

export default Menu;
