import React from 'react';

import { useSelector } from 'react-redux';

import Todo from './Todo';


export default function TasksList() {

    const tasksList = useSelector(state => state.tasks.value);



    return(
        <div>
            {
                tasksList.map(todo => {
                    return (
                        <Todo todo={todo} keyValue={todo.id}/>
                    )
                })
            }
        </div>
    )
}