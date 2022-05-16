import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../features/orderSlice'
import menuReducer from '../features/menuSlice'

export default configureStore({
  reducer: {
    order: orderReducer,
    menu: menuReducer
  }
})