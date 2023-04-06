/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {
  createContext, useContext, useState, useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleChange,
        delTodo,
        addTodoItem,
        setUpdate,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export const useTodosContext = () => useContext(TodosContext);
