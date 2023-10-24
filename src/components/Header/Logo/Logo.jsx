import { Link } from "react-router-dom";
import React from "react";

const Logo = () => {
	return (
		<div
			style={{
				fontSize: 28,
				fontWeight: 700,
				letterSpacing: 4,
				color: "#F9F7F7",
			}}
		>
			<Link to={"/"}>
				GGK<span style={{ color: "#112D4E" }}>IT</span>
			</Link>
		</div>
	);
};

export default Logo;
