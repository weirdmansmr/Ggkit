import React, { useState } from "react";
import AuthInput from "./AuthInput/AuthInput";
import { Link } from "react-router-dom";
import style from "./AuthBlock.module.scss";

const AuthBlock = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (username === "admin" && password === "admin") {
			alert("Вход выполнен успешно");
		} else {
			alert("Неверное имя пользователя или пароль");
		}
	};

	return (
		<div className={style.authCont}>
			<h1>Авторизация</h1>
			<form method="get">
				<AuthInput
					type="text"
					placeholder="Имя"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<AuthInput
					type="password"
					placeholder="Пароль"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className={style.btnCont}>
					<button id={style.login} onClick={handleLogin}>
						Войти
					</button>
					<button id={style.registration}>Регистрация</button>
				</div>
			</form>
		</div>
	);
};

export default AuthBlock;
