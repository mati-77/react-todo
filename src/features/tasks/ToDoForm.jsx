import React from 'react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

export default function ToDoForm() { 

    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState('')

    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addTask(userInput))
        setUserInput('')
    }

    return(
        <form action="">
            <input value={userInput} type="text" onChange={handleChange} placeholder='Ingresar tarea...' />
            <button type="submit" onClick={handleSubmit}>Añadir Tarea</button>
        </form>
    )
}