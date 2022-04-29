import React from 'react';

import { useSelector } from 'react-redux';

import Todo from './Todo';


export default function TasksList() {

    const tasksList = useSelector(state => state.tasks.value);

    return(
        <div className='tasklist'>
            {
                tasksList.map(todo => {
                    return (
                        <div key={todo.id + todo.task}>
                            <Todo todo={todo}/>
                        </div>
                    )
                })
            }
        </div>
    )
}