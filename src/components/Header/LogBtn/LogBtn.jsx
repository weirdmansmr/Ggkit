import { FaUserGraduate } from "react-icons/fa6";
import style from "./LogBtn.module.scss";
import React from "react";
import { Link } from "react-router-dom";

const LogBtn = () => {
	return (
		<Link to={'login'}>
			<span className={style.icon}>
				<span style={{ fontSize: 24 }}>
					<FaUserGraduate />
				</span>
				Войти
			</span>
		</Link>
	);
};

export default LogBtn;
