import style from "./NavBar.module.scss";
import React from "react";

const NavBar = () => {
	return (
		<nav className={style.navCont}>
			<ul className={style.list}>
				<li>Курсы</li>
				<li>О нас</li>
			</ul>
		</nav>
	);
};

export default NavBar;
