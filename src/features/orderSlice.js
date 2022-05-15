import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: {}
  },
  reducers: {
    addOrder: (state, action) => {
        if (!(action.payload in state))
        {
            state.value[action.payload[0]] = {info: action.payload[1], count: 1}
        }
    },
    incrementOrder: (state, action) => {
        state.value[action.payload].count += 1
    },
    decrementOrder: (state, action) => {
        if (state[action.payload].count === 1) {
            delete state.value[action.payload].count
        } else {
            state.value[action.payload].count -= 1
        }
    }
  }
})

export const { addOrder, incrementOrder, decrementOrder} = orderSlice.actions

export default orderSlice.reducer