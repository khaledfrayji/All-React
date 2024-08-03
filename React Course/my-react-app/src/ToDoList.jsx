import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState(["Eat breakfast", "React course"]);
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if(newTask.trim() !=""){
      setTasks(t=>[...t,newTask])
      setNewTask("");
    }
  
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((element,i)=> i!==index);
    setTasks(updatedTasks);
  };
  const moveTaskUp = (index) => {
    if(index>0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
     if(index<tasks.length -1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div className="enter-task">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-task" onClick={addTask}>
          ADD
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {" "}
            <span className="text"> {task} </span>
            <button className="delete-task" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button className="move-task" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button className="move-task" onClick={() => moveTaskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
//with function with parameter we should use arrow function e.g: () => deleteTask(index)
