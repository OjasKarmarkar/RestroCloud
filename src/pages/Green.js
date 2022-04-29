import React from 'react'
import { motion } from 'framer-motion'
import { i, a, e, t } from '../styles/PageTransitionStyles'

function Green() {
  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      className='page green'>
        Green
    </motion.div>
  )
}

export default Green