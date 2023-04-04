import { createContext, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from 'react';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState(getInitialTodos());
   
    const handleChange = (id) => {
      setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
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
