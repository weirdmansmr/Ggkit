import { Link } from "react-router-dom";
import Card from "./Card/Card";
import style from "./CardList.module.scss";
import React from "react";

const CardList = () => {
	return (
		<div className={style.cardList}>
			<Link to={"lesson"}>
				<Card />
			</Link>
			<Link to={"lesson"}>
				<Card />
			</Link>
			<Link to={"lesson"}>
				<Card />
			</Link>
			<Link to={"lesson"}>
				<Card />
			</Link>
		</div>
	);
};

export default CardList;
