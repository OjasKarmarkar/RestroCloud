import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "EMPTY MENU"
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
      updateMenu: (state, action) => {
        state.value = action.payload
      }
  }
});

export const { updateMenu } = menuSlice.actions

export default menuSlice.reducer