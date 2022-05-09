import express from 'express'


import {
  currentMenu,
} from '../controller/restro.js'

const router = new express.Router()

//Get New Offers
// router.get('/daily', dailyOffers)

//Get current Menu
router.get('/menu', currentMenu)

//Get table-order info
// router.post('/order-info', tableInfo)

// //Update order/table
// router.put('/update-order', updateOrder)

// //Get bill / Split bill
// router.post('/billing', billing)



export default router