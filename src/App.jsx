import React from 'react';
import './App.css';
import IndivTask from "./indivTask";
import { useState } from 'react';

function App(props) {
  const [tasks, updateTasks] = useState([
    { id: "todo-0", name: "Add tasks using the '+' button on the side", done: false },
    { id: "todo-1", name: "Click the trashcan button to delete tasks", done: true },
    { id: "todo-2", name: "Finish all of your tasks to grow your plant!", done: false }
  ]);

  const addTask = () => {
    const newTask = { id: `todo-${tasks.length}`, name: "", done: false };
    // tasks.push(newTask);
    updateTasks([...tasks,newTask])
    console.log("calling addTask")
    console.log(tasks)
  };
  // const deleteTask = () => {
  //   // tasks.push(newTask);
  //   updateTasks([...tasks,newTask])
  // };

  return (
    <div className="body">
      {/* left taskbar */}
      <div className="task-bar">
        <h2>Tasks:</h2>
        {tasks.map(task => (
          <IndivTask
            key={task.id}
            text={task.name}
            done={task.done}
            addTask={addTask}
          />
        ))}
      </div>
      <div>
      </div>

      {/* Plant :D */}
      <div>
        <div>
          health bar
        </div>
        placeholder for plant
      </div>
    </div>
  );
}

export default App;