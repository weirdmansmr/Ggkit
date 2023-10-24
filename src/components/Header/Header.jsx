import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar.jsx";
import style from "./Header.module.scss";
import React from "react";

const Header = () => {
	return (
		<header className={style.headFlex}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
				<Logo />
				<NavBar />
			</div>
			<Login />
		</header>
	);
};

export default Header;
