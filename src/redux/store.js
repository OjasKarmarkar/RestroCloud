import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../features/orderSlice'
import menuReducer from '../features/menuSlice'
import billReducer from '../features/billSlice'

export default configureStore({
  reducer: {
    order: orderReducer,
    menu: menuReducer,
    bill: billReducer,
  }
})