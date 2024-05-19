import React from 'react'
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="container d-flex justify-content-between w-25 bg-light mt-2 p-2">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
       <button className='btn btn-success'> <FaRegEdit  className="m-1 fs-4" onClick={() => editTodo(task.id)}  /></button>
        <button className='btn btn-danger ms-1'><BsTrash3  className="m-1 fs-4" onClick={() => deleteTodo(task.id)}/></button>
        </div>
    </div>
  )
}