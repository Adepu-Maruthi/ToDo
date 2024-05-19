import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="container d-flex justify-content-center bg-light rounded">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="p-3 w-25 m-3 rounded border-1 focus-ring" placeholder='What is the task today?' />
            <button type="submit" className='p-3 m-3 btn btn-primary focus-ring'>Add Task</button>
        </form>
    )
}
export default TodoForm