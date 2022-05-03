import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { clearCompleted } from '../tasks/tasksSlice';

export default function ClearButton() {

    const dispatch = useDispatch()

    const taskLista = useSelector(state => state.tasks.value)

    if(taskLista.length !== 0) {
        return(
            <div className='clearcompleted'>
                <button onClick={() => dispatch(clearCompleted())}>Eliminar completadas</button>
            </div>
        )
    }
}