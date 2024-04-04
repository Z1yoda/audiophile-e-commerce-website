import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            console.log(state.value);
        },
        decrement: (state) => {
            if (state.value > 1) {
                state.value -= 1
            }

        }
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer