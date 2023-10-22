import style from "./Card.module.scss";
import img from "../../../assets/pngwing.com (9).png";
import { motion } from "framer-motion";

const Card = () => {
	return (
		<motion.div
			transition={{ duration: 0.2 }}
			whileHover={{
				background: "linear-gradient(90deg, #3f72af 0%, #dbe2ef 100%)",
				transform: "scale(1.05)",
				color: "#dbe2ef",
			}}
			style={{
				background: "linear-gradient(90deg, #dbe2ef 50%, #3f72af 100%)",
				color: "#112D4E",
			}}
			className={style.cardCont}
		>
			<h2>Информатика</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta et
				voluptatibus optio asperiores eum natus magnam a quis facere accusantium
				rerum quas nemo reiciendis nihil, molestias porro dolores, sequi ipsa?
			</p>
			<img src={img} alt="" />
		</motion.div>
	);
};

export default Card;
