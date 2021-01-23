import React from "react";
import Img from "gatsby-image";
import BurgerItemStyles from "../../styles/BurgerItemStyles";
import formatMoney from "../../utils/formatMoney";

function BurgerCartItem({ order, removeOrder }) {
	// console.log("orders in order page", burgers)
	return (
		<>
			{order.map((burger, index) => {
				return(
					<BurgerItemStyles key={index}>
						<div className="pic">
							<Img fluid={burger.image.asset.fluid} alt={burger.name} />
						</div>
						<div className="name">
							<p>{burger.name}</p>
							<p>{formatMoney(burger.price)}</p>
							<button
								type="button"
								onClick={() => {
									removeOrder(index);
								}}
							>
								&times;
							</button>
						</div>
					</BurgerItemStyles>
				)
			})}
		</>
	);
}

export default BurgerCartItem;


/*
{order.map((singleOrder, index) => {
				const burger = burgers.find((burger) => burger._id === singleOrder.id);
				console.log(burger);
				return (
					<BurgerItemStyles key={index}>
						<div className="pic">
							<Img fluid={burger.image.asset.fluid} alt={burger.name} />
						</div>
						<div className="name">
							<p>{burger.name}</p>
							<p>{formatMoney(burger.price)}</p>
							<button
								type="button"
								onClick={() => {
									removeOrder(index);
								}}
							>
								&times;
							</button>
						</div>
					</BurgerItemStyles>
				);
			})}



*/