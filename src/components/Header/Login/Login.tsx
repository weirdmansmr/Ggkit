import { FaUserGraduate } from "react-icons/fa6";
import style from "./Login.module.scss";

const Login = () => {
	return (
		<span className={style.icon}>
			<span style={{ fontSize: 24 }}>
				<FaUserGraduate />
			</span>
      Войти
		</span>
	);
};

export default Login;