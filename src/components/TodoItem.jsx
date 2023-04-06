/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>
          <AiFillEdit
            style={{ color: '#5e5e5e', fontSize: '16px' }}
          />
        </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash
            style={{ color: '#5e5e5e', fontSize: '16px' }}
          />
        </button>
        {itemProp.title}
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
