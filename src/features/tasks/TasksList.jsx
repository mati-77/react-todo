import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { complete } from './tasksSlice';

export default function TasksList() {

    const dispatch = useDispatch()


    function handleClick(e) {
        console.log(e)
        let idToSearch = e.currentTarget.id
        console.log(idToSearch)
        console.log(typeof(idToSearch))
        dispatch(complete(idToSearch))
    }

    const tasksList = useSelector(state => state.tasks.value);

    return(
        <ul className='tasklist'>
            {
                tasksList.map(todo => {
                    return (
                        <li 
                            key={todo.id} 
                            id={todo.id} 
                            className={todo.complete ? "task completed" : "task"} 
                            onClick={handleClick}
                        >
                            {todo.task}
                        </li>
                    )
                })
            }
        </ul>
    )
}