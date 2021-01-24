import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

function SEO({ children, location, description, title, image }) {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					twitter
				}
			}
		}
	`);

	return (
		<Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
			<html lang="en" /> {/* specify what language your website is in*/}
			<title>{title}</title>
			{/* fav icons */}
			<link rel="icon" type="image/svg+xml" href="/burgerFavicon.ico" />
			<link ref="alternate icon" href="/burgerFavicon.ico" />
			{/* meta tags */}
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta charSet="utf-8" />
			<meta name="description" content={site.siteMetadata.description} />
			{/* open graph */}
			{location && <meta property="og:url" content={location.href} />}
			<meta property="og:image" content={image || "/burgerFavicon.ico"} />
			<meta property="og:title" content={title} key="ogtitle" />
			<meta
				propery="og:site_name"
				content={site.siteMetadata.title}
				key="ogsitename"
			/>
			<meta property="og:description" content={description} key="ogdesc" />
			{children}
		</Helmet>
	);
}

export default SEO;