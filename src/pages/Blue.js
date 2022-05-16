import React from 'react'
import { motion } from 'framer-motion'
import { i, a, e, t } from '../styles/PageTransitionStyles'
import BillingContainer from '../components/Billing/BillingContainer'

function Blue() {
  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      className='page blue'>
        <BillingContainer />
    </motion.div>
  )
}

export default Blue