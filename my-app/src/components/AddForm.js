import React, { useState }  from 'react';
import '../styles/AddForm.css';

const AddForm = ({ newTodo }) => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        newTodo(text);
        event.target.reset();
      }}
    >
      <input
        type="text"
        name="new"
        placeholder="Add todo"
        onChange={(event) => {
          setText(event.target.value);
        }}
        text={text}
      ></input>
    </form>
  );
};

export default AddForm;