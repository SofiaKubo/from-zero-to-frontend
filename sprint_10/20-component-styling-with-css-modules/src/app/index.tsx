import { data as cards } from "../data";
import { CardsList } from "../components/cards-list";
import s from "./app.module.css";

export const App = () => {
  return (
    <div className={s.app}>
      <main className={s.content}>
        <CardsList cards={cards} />
      </main>
    </div>
  );
};