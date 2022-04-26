import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { clearCompleted } from './tasksSlice';

import Todo from './Todo';


export default function TasksList() {

    const tasksList = useSelector(state => state.tasks.value);

    const dispatch = useDispatch()

    function clearCompletedTasks(e){
        e.preventDefault()
        dispatch(clearCompleted())
    }

    return(
        <div>
            {
                tasksList.map(todo => {
                    return (
                        <div key={todo.id + todo.task}>
                            <Todo todo={todo}/>
                        </div>
                    )
                })
            }
            <button onClick={clearCompletedTasks}>Clear Completed</button>
        </div>
    )
}