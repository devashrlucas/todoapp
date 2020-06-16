import React from 'react';
import '../styles/List.css';

const List = ({ tasks, deleteTask }) => (
  <ul>
    {tasks.map((task, id) => (
      <li key={id.toString()} text={task}>
        <input
          type="checkbox"
          onClick={() => {
            deleteTask(id);
          }}
        ></input>
        {task}
      </li>
    ))}
  </ul>
);

export default List;