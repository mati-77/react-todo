import React from 'react';
import { useDispatch } from 'react-redux';

import { complete } from './tasksSlice';

export default function Todo({ todo }) {

    const dispatch = useDispatch()


    function handleClick(e) {
        console.log(e)
        let idToSearch = e.currentTarget.id
        console.log(idToSearch)
        console.log(typeof(idToSearch))
        dispatch(complete(idToSearch))
    }

    return(
        <div className={todo.complete ? "completed" : ""} onClick={handleClick} key={todo.id} id={todo.id}>
            <h4>{todo.task}</h4>
        </div>
    )
}