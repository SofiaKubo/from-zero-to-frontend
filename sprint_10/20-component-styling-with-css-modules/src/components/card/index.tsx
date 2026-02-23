import { TCard } from "../../types";
import s from "./card.module.css";

type TCardProps = {
  card: TCard;
};

export const Card = ({ card }: TCardProps) => {
  return (
    <article className={s.card}>
      <img className={s.image} alt={card.alt} src={card.src} />
      {card.title && <p className={s.title}>{card.title}</p>}
      <p className={s.subtitle}>{card.subtitle}</p>
    </article>
  );
};