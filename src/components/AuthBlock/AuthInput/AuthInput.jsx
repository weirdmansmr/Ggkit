import React from "react";
import style from "./AuthInput.module.scss";

const AuthInput = ({ type, value, onChange, placeholder }) => {
	return (
		<input
    className={style.logInput}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default AuthInput;
