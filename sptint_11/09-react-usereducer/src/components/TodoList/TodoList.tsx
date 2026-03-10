import { TodoModel } from '../../models/TodoModel';
import { TodoItem } from '../TodoItem/TodoItem';
import { Dispatch } from 'react';
import './styles.css';

interface TodoListProps {
  todos: TodoModel[];
  dispatch: Dispatch<any>;
}

export const TodoList = ({ todos, dispatch }: TodoListProps) => {
  return (
    <ul className="list">
      {todos.map((todo: TodoModel) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};
