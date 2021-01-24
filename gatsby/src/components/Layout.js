import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import styled from "styled-components";
import bg from "../assets/images/bg.svg";
import stripes from "../assets/images/stripes.svg";
import Nav from "./Nav";
import "normalize.css";

function Layout({ children }) {
	return (
		<>
			<GlobalStyles />
			<Typography />
			<SiteBorderStyles>
				<ContentStyles>
					<Nav />
					{children}
				</ContentStyles>
			</SiteBorderStyles>
		</>
	);
}

const ContentStyles = styled.div`
	/* background: white; */
	background-image: url(${bg});
	padding: 2rem;
`;

const SiteBorderStyles = styled.div`
	/* border: solid red; */
	max-width: 1800px;
	max-height: 3000px;
	margin: 4rem auto; // top, auto, bottom, auto on left + right
	/* margin-top: clamp(2rem, 10vw, 12rem); */
	background-size: 1500px;
	padding: 5px;
	padding: clamp(5px, 1vw, 25px);
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
	border: 5px solid white;

	@media (max-width: 1100px) {
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}
`;

export default Layout;
{
	/** 
max-width: 1800px;
	max-height: 3000px;
	margin: 12rem auto 4rem auto; // top, auto, bottom, auto on left + right
	margin-top: clamp(2rem, 10vw, 12rem);
	background-size: 1500px;
	padding: 5px;
	padding: clamp(5px, 1vw, 25px);
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
	border: 5px solid white;


*/
}
