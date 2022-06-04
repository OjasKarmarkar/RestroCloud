import React from 'react'
import { motion } from 'framer-motion'
import { i, a, e, t } from '../styles/PageTransitionStyles'
import OrderContainer from '../components/Orders/OrderContainer'

function Cart() {
  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      >
        {/* <HeaderBg /> */}
        <OrderContainer />
    </motion.div>
  )
}

export default Cart