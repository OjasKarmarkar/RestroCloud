import React from 'react'
import { motion } from 'framer-motion'
import { i, a, e, t } from '../styles/PageTransitionStyles'

function Blue() {
  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      className='page blue'>
        Blue
    </motion.div>
  )
}

export default Blue