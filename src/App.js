import React, { useState } from "react";
import Header from "./component/Header";
import "./App.css";
import TaskList from "./component/TaskList";
import AddTaskForm from "./component/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS fundamental", status: 0 },
    { id: "task_2", title: "Code a Todo List new", status: 1 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(true);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
     <Header title="Todo List" subTitle="Get it done" />
     <TaskList tasks ={tasks} 
     showIncomplete={showIncomplete} 
     setTaskStatus ={setTaskStatus}
      removeTask = {removeTask}
      setShowIncomplete={setShowIncomplete}/>
    
      

      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted task only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
      <AddTaskForm
      newTask={newTask}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}/>
    </div>
  );
}
export default App;
