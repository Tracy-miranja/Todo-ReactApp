/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, handleChange, setTodos, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        setTodos={setTodos}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
