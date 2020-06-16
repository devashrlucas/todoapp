import React, { useState } from 'react';
import AddForm from './AddForm';
import '../styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <AddForm
        newTodo={(text) => {
          setTodos([...todos, text]);
        }}
      />
    </div>
  );
}

export default App;
