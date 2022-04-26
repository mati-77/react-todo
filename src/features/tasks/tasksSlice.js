import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [
            {
                "id": 1,
                "task": "Bañar al perro",
                "complete": true
            }, 
            {
                "id": 2,
                "task": "Lavar la ropa",
                "complete": true
            }, 
            {
                "id": 3,
                "task": "Limpiar el piso",
                "complete": false
            }, 
            {
                "id": 4,
                "task": "Alimentar al gato",
                "complete": true
            }, 
            {
                "id": 5,
                "task": "Cambiar focos de luz",
                "complete": false
            }
        ]
    },
    reducers: {
        complete : (state, action) => {
            let id = action.payload
            let mapped = state.value.map(task => {
                return task.id === id ? {...task, complete: !task.complete} : {...task}
            })
            state.value = mapped
        },

        clearCompleted : state => {
            let filterCompleted = state.value.filter(task => {
                return task.complete === false
            })
            console.log(filterCompleted)
            state.value = filterCompleted
        }
    }
})

export const { complete, clearCompleted } = tasksSlice.actions

export default tasksSlice.reducer