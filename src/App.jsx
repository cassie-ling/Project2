import React from 'react';
import './App.css';
import IndivTask from "./indivTask";
import { useState } from 'react';

function App(props) {
  const [tasks, updateTasks] = useState([
    { id: "todo-0", name: "Add tasks using the '+' button on the side", done: false },
    { id: "todo-1", name: "Click the trashcan button to delete tasks", done: false },
    { id: "todo-2", name: "Finish all of your tasks to grow your plant!", done: false }
  ]);

  const addTask = () => {
    const newTask = { id: `todo-${tasks.length}`, name: "", done: false };
    // tasks.push(newTask);
    updateTasks([...tasks,newTask])
    console.log("calling addTask")
    console.log(tasks)
  };

  function deleteTask(id){
    console.log(id)
    const remainingTasks = tasks.filter((task) => id !== task.id);
    updateTasks(remainingTasks);
  }

  const totalTasksFinished = () => {
    const doneTasks = tasks.filter((task) => task.done === true);
    return doneTasks.length;
    console.log("completed task amount:", totalTasksFinished)
  };

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    updateTasks(updatedTasks);
  };

  function plantGrowth() {
    const progress = totalTasksFinished() / tasks.length;
    let pathToImage = "images/flower1.png";
    
    if (progress >= 0.2 && progress < 0.4) {
      pathToImage = "images/flower2.png";
    } else if (progress >= 0.4 && progress < 0.6) {
      pathToImage = "images/flower3.png";
    } else if (progress >= 0.6 && progress < 0.8) {
      pathToImage = "images/flower4.png";
    } else if (progress >= 0.8 && progress <= 1) {
      pathToImage = "images/flower5.png";
    }
  
    return pathToImage;
  }

  return (
    <div className="body">
      {/* left taskbar */}
      <div className="task-bar">
        <h2>Tasks:</h2>
        {tasks.map(task => (
          <IndivTask
            key={task.id}
            id={task.id}
            text={task.name}
            done={task.done}
            addTask={addTask}
            deleteTask={deleteTask}
            toggleTaskDone={toggleTaskDone}
          />
        ))}
      </div>
      <div>
      </div>

      {/* Plant :D */}
      <div className="right-side-div">
        <div>
          <div>
            <progress value={totalTasksFinished()/tasks.length}/>
          </div>
          <div>
          {totalTasksFinished()}/{tasks.length} tasks completed
          </div>
        </div>
        <div className="plant-div">
          <img src={plantGrowth()} alt="Plant growth stage"/>
        </div>
      </div>
    </div>
  );
}


export default App;