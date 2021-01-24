import React from "react";
import Bio from "../components/About/Bio";
import SEO from "../components/SEO";

function about() {
	return (
		<>
			<SEO title="About the founder" />
			<Bio />
		</>
	);
}

export default about;
