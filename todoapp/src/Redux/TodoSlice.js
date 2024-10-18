import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      addTask: (state, action)=>{
        state.tasks.push({
            id: Date.now(),
            text: action.payload.text,
        });
      },
      removeTask: (state, action)=>{
        state.tasks = state.tasks.filter(task=>task.id !== action.payload.id)
      }
   }
});

export const {addTask, removeTask} = todoSlice.actions;
export default todoSlice.reducer;