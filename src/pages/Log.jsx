import React from "react";
import AuthBlock from "../components/AuthBlock/AuthBlock";

const Login = () => {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "calc(100vh - 80px)",
			}}
		>
			<AuthBlock />
		</main>
	);
};

export default Login;
