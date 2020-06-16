import React, { useState } from 'react';
import Header from "./Header";
import AddForm from './AddForm';
import List from './List';
import '../styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header number={tasks.length} />
      <AddForm
        newTodo={(text) => {
          setTasks([...tasks, text]);
        }}
      />
      <List
        tasks={tasks}
        deleteTask={(taskid) => {
          const newTasks = tasks.filter((_, id) => id !== taskid);
          setTasks(newTasks);
        }}
      />
    </div>
  );
}

export default App;
