import { ReactElement } from 'react';

type ItemProps = {
  item: string;
};

type ListProps = {
  list: string[];
};

function Item(props: ItemProps): ReactElement {
  return <li>{props.item}</li>;
}

function List(props: ListProps): ReactElement {
  return (
    <ul>
      {props.list.map((textbook) => (
        <Item key={textbook} item={textbook} />
      ))}
    </ul>
  );
}

const listTextbooks = [
  'Русский язык - Гусарова И.В.',
  'Литература (в 2 частях) - Лебедев Ю.В.',
  'Черчение - Преображенская Н.Г., Кодукова И.В.',
  'Химия - Габриелян О.С., Остроумов И.Г., Сладков С.А.',
  'Информационная безопасность. Кибербезопасность. - Цветкова М.С., Хлобыстова И.Ю.',
];

export const App = () => {
  return <List list={listTextbooks} />;
};
