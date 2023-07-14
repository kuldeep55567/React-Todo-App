import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const formattedDate = new Date(task.dateAdded).toLocaleString();

  return (
    <div className="Todo">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{formattedDate}</p>
      <p
        className={`status-btn ${task.completed ? 'completed' : 'incomplete'}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.completed ? 'Completed' : 'Incomplete'}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};


