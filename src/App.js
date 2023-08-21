import React, {useState} from "react";
import "./App.css";

function App () {
  const [tasks, setTasks] = useState([
    {title:"Learn JS", status:0},
    {title:"Code a Todo List", status:0},

  ]);
  const [showIncomplete,setShowIncompele] = useState(false);
  const [newTask, setNewTask] = useState("");
    return (
        <div className="container">
  <h1 className="title">Todo List
    <span>Get one item done at a time</span>

  </h1>
  <span>Get one item done at a time</span>
  <ul className="task-list">
    {tasks.map(task => (

    
    <li>
      <span className="label">Lear Js</span>
      <div className="action">
      <input type="checkbox" className="btn-action btn-action-done" />

        <button className="btn-action btn-action-delete">❌</button>
      </div>
    </li>
     ))}
  </ul>
  <div className="filter-wrapper">
    <label htmlfor="filter" className="filter-label">Show incompleted task only</label>
    <input type="checkbox" id="filter">?</input>
  </div>
  <form action="#" className="form">
    <label htmlfor="newitem">Add the Todo List</label>
    <input type="text" id="newitem"/>
    <button type="submit">Add Item</button>
  </form>
</div>
    );
}
export default App;