import React from 'react'
import { motion } from 'framer-motion'
import { i, a, e, t } from '../styles/PageTransitionStyles'

function Yellow() {
  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      className='page yellow'>
        Yellow
    </motion.div>
  )
}

export default Yellow