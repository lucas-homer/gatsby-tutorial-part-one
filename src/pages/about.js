import React from "react"
import Link from 'gatsby-link';

export default () => {
	return (
		<div style={{ color: `blue` }}>
			<h3>Hey Gatsby</h3>
			<p>This is the about page</p>
			<Link to="/">Home</Link>
		</div>
	);
}