import style from "./Card.module.scss";
import img from '../../../assets/pngwing.com (9).png'

const Card = () => {
	return (
		<div className={style.cardCont}>
			<h1>Информатика</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta et
				voluptatibus optio asperiores eum natus magnam a quis facere accusantium
				rerum quas nemo reiciendis nihil, molestias porro dolores, sequi ipsa?
				Perspiciatis consectetur corrupti a, explicabo animi eos. Molestias
				sapiente animi ex repudiandae eaque corporis quidem repellendus facilis
				explicabo, dolorem quis ut ducimus quia. Vitae quis, quam aut accusamus
				nobis natus?
			</p>
      <img src={img} alt="" />
		</div>
	);
};

export default Card;
