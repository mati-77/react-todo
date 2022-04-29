import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: []
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
        },

        addTask : (state, action) => {
            state.value.push({id: crypto.randomUUID(), task: action.payload, complete: false})
        }
    }
})

export const { complete, clearCompleted, addTask } = tasksSlice.actions

export default tasksSlice.reducer