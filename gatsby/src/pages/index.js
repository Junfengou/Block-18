import React from "react";
import Home from "../components/Home/Home";
import Options from "../components/Home/Options";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

function index({ data: { burgers } }) {
	return (
		<>
			<SEO title="Welcome back to" />
			<Home />
			<Options burgers={burgers} />
		</>
	);
}

export default index;

export const query = graphql`
	query {
		burgers: allSanityMenu {
			nodes {
				image {
					asset {
						fluid(maxWidth: 200) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`;
