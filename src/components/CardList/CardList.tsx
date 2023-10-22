import { Link } from "react-router-dom";
import Card from "./Card/Card";
import style from "./CardList.module.scss";

const CardList = () => {
	return (
		<div className={style.cardList}>
			<Link to={''}>
				<Card />
			</Link>
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardList;
