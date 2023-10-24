import React, { useState } from "react";
import AuthInput from "./AuthInput/AuthInput";

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
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: 20,
				flexDirection: "column",
				backgroundColor: "white",
				borderRadius: 20,
				padding: "40px 20px",
				border: "1px solid #112d4e",
			}}
		>
			<h1 style={{ color: "#112d4e", fontSize: 40 }}>Авторизация</h1>
			<form
				method="post"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<AuthInput
					type="text"
					placeholder="Имя"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<AuthInput
					type="password"
					placeholder="Пароль"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<button
					style={{
						outline: "none",
						border: "none",
						backgroundColor: "#112d4e",
						color: "white",
						padding: "10px 20px",
						fontSize: 18,
						borderRadius: 10,
					}}
					onClick={handleLogin}
				>
					Войти
				</button>
			</form>
		</div>
	);
};

export default AuthBlock;
