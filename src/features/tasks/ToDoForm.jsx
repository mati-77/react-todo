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
        if (userInput.length !== 0) {
            dispatch(addTask(userInput))
            setUserInput('')
        }
    }

    return(
        <form action="" className='form'>
            <input value={userInput} type="text" onChange={handleChange} placeholder='Ingresar tarea...' />
            <button type="submit" onClick={handleSubmit}>Añadir Tarea</button>
        </form>
    )
}