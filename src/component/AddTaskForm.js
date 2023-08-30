import React from 'react'

function AddTaskForm({handleSubmit,handleInputChange,newTask}) {
  return (
    <form onSubmit={handleSubmit} className="form">
        <label htmlFor="newitem">Add the Todo List</label>
        <input
          type="text"
          id="newitem"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add Item</button>
      </form>
  )
}

export default AddTaskForm