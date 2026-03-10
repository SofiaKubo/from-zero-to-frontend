import './styles.css';
import { TodoModel } from '../../models/TodoModel';
import { ChangeEvent, FormEvent, useState, Dispatch } from 'react';
import { getRandomInt } from '../../utils/getRandomInt';

interface TodoInputProps {
  dispatch: Dispatch<any>;
}

export const TodoInput = ({ dispatch }: TodoInputProps) => {
  const [todoText, setTodoText] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (todoText !== '') {
      setTodoText('');
      dispatch({
        type: 'ADD_TODO',
        payload: { id: getRandomInt(), text: todoText },
      });
    }
  };
  return (
    <form onSubmit={onAddTodo} className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Введите todo..."
        onChange={onInputChange}
        value={todoText}
      />
      <button type="submit" className="todo-submit-button">
        Добавить
      </button>
    </form>
  );
};
