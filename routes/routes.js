import express from 'express'


import {
  currentMenu,
  tableInfo,
  updateOrder
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

// //Get bill / Split bill
// router.post('/billing', billing)



export default router