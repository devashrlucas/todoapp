import React, { useState } from 'react';
import Header from "./Header";
import AddForm from './AddForm';
import '../styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header number={todos.length} />
      <AddForm
        newTodo={(text) => {
          setTodos([...todos, text]);
        }}
      />
    </div>
  );
}

export default App;
