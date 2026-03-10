import { TodoModel } from '../models/TodoModel';

type TodosAction = { type: 'ADD_TODO'; payload: TodoModel } | { type: 'DELETE_TODO'; payload: number };

export const todoReducer = (todos: TodoModel[], action: TodosAction): TodoModel[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, action.payload];

    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.payload);

    default:
      return todos;
  }
};
