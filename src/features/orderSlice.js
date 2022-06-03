import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: {}
  },
  reducers: {
    addOrder: (state, action) => {
        if (!(action.payload in state))
        {
            state.value[action.payload[0]] = {info: action.payload[1], count: 1, cost: 69}
        }
    },
    removeOrder: (state) => {
      state.value = {}
    },
    incrementOrder: (state, action) => {
        state.value[action.payload].count += 1
    },
    decrementOrder: (state, action) => {
        if (state.value[action.payload].count > 1) {
          state.value[action.payload].count -= 1
        } else {
          delete state.value[action.payload]
        }
    }
  }
})

export const { addOrder, removeOrder, incrementOrder, decrementOrder} = orderSlice.actions

export default orderSlice.reducer