import React from 'react';

function IndivTask(props) {
  function handleAddTask(){
    props.addTask("");
    console.log("works")
  };
//   function handleDeleteTask(){
//     props.deleteTask("");
//   }

  return (
    <div className="indiv-task-div">
      <div className="checkbox">
      </div>
      <div contentEditable="true" className="indiv-task-input">{props.text}</div>

      <div className="plus" onClick={handleAddTask}>
        <img src="images/plus.svg" alt="Add Task" />
      </div>
      <div className="trashcan">
        <img src="images/trashcan.svg" alt="Delete Task" />
      </div>
      <input type="checkbox" className="cb" defaultChecked={props.done} />
    </div>
  );
}

export default IndivTask;