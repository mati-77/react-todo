import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { clearCompleted } from './tasksSlice';

import Todo from './Todo';
import ToDoForm from './ToDoForm';


export default function TasksList() {

    const tasksList = useSelector(state => state.tasks.value);

    const dispatch = useDispatch()

    return(
        <div>
            <ToDoForm />
            {
                tasksList.map(todo => {
                    return (
                        <div key={todo.id + todo.task}>
                            <Todo todo={todo}/>
                        </div>
                    )
                })
            }
            <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
        </div>
    )
}