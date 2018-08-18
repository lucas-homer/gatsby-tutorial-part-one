import React from "react"
import Link from 'gatsby-link';

export default () => {
	return (
		<div style={{ color: `tomato` }}>
			<h3>Hey Gatsby</h3>
			<p>What a world</p>
			<div>
				<Link to="/about">About</Link>
			</div>
			<div>
				<Link to="/counter/">counter</Link>
			</div>
		</div>
	);
}
