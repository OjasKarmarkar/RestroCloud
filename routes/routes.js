import express from 'express'


import {
  currentMenu,
  tableInfo,
  updateOrder,
  resetTable,
  getBill
} from '../controller/restro.js'

const router = new express.Router()

//Get New Offers
// router.get('/daily', dailyOffers)

//Get current Menu
router.get('/menu', currentMenu)

//Get table-order info
router.get('/table/:id', tableInfo)

//Update order/table
router.put('/update-order/:id/:ord', updateOrder)

//Reset Table
router.put('/reset/:id' , resetTable)

//Get Bill
router.get('/bill/:id' , getBill)

// //Get bill / Split bill
// router.post('/billing', billing)



export default router