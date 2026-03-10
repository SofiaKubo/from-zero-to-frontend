import './styles.css';
import { TodoModel } from '../../models/TodoModel';
import { Dispatch } from 'react';

interface TodoItemProps {
  todo: TodoModel;
  dispatch: Dispatch<any>;
}

export const TodoItem = ({ todo, dispatch }: TodoItemProps) => {
  const { id, text } = todo;

  const onDeleteTodo = () => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <li className="todo-item">
      <div>{text}</div>
      <button className="todo-delete-button" onClick={onDeleteTodo}>
        удалить
      </button>
    </li>
  );
};
