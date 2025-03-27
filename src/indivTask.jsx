import React from 'react';

function IndivTask(props) {
  function handleAddTask(){
    props.addTask("");
    console.log("adding working")
  };

  function handleDeleteTask(){
    props.deleteTask(props.id)
    console.log("delete handle working")
  }

  function handleToggleDone() {
    props.toggleTaskDone(props.id); // Call the toggle function
  }

  return (
    <div className="indiv-task-div">
      <div className="checkbox">
      </div>
      <div contentEditable="true" className="indiv-task-input">{props.text}</div>

      <div className="plus" onClick={handleAddTask}>
        <img src="images/plus.svg" alt="Add Task" />
      </div>
      <div className="trashcan" onClick={handleDeleteTask}>
        <img src="images/trashcan.svg" alt="delete task"/>
      </div>
      <input type="checkbox" className="cb" checked={props.done} onChange={handleToggleDone} alt="checkbox"/>
    </div>
  );
}

export default IndivTask;