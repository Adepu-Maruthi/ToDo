import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="container d-flex justify-content-center">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="p-3 w-25 m-3 rounded border-1 focus-ring" placeholder='Update task' />
      <button type="submit" className='p-3 m-3 btn btn-success focus-ring'>Update Task</button>
    </form>
  )
}