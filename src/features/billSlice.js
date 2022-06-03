import { createSlice } from '@reduxjs/toolkit'

const billSlice = createSlice({
  name: 'bill',
  initialState: {
    value: {}
  },
  reducers: {
    addToBill: (state, action) => {
        action.payload.forEach((item)=> {
            if (!(item[0] in state.value)) {
                state.value[item[0]] = {name:item[0], count: item[1].count, cost: item[1].cost}
            } else {
                state.value[item[0]].count += item[1].count
            }
        })
    }
  }
})

export const { addToBill } = billSlice.actions

export default billSlice.reducer