import React from 'react';
import { useDispatch } from 'react-redux';

import { complete } from './tasksSlice';

export default function Todo({ todo, keyValue }) {

    const dispatch = useDispatch()


    function handleClick(e) {
        e.preventDefault()
        console.log(e)
        let idToSearch = Number(e.target.id)
        dispatch(complete(idToSearch))
    }

    return(
        <div className={todo.complete ? "completed" : ""} onClick={handleClick} key={todo.id + todo.task} id={todo.id}>
            <h3>{todo.task}</h3>
        </div>
    )
}