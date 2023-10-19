import Card from './Card/Card';
import style from './CardList.module.scss'

const CardList = () => {
  return <div className={style.cardList}>
    <Card />
  </div>;
};

export default CardList;
