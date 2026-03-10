import './styles.css';
import { TodoInput } from '../components/TodoInput/TodoInput';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoModel } from '../models/TodoModel';
import { useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import { getRandomInt } from '../utils/getRandomInt';

const initialTodos: TodoModel[] = [
  {
    id: getRandomInt(),
    text: 'Полить цветы',
  },
  {
    id: getRandomInt(),
    text: 'Погулять с собакой',
  },
  {
    id: getRandomInt(),
    text: 'Прочитать книгу',
  },
];

export const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <div className="container">
      <div className="inner">
        <TodoInput dispatch={dispatch} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
};
