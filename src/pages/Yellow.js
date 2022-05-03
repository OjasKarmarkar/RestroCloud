import React from 'react'
import { motion } from 'framer-motion'
import { Carousel } from '../components/Carousel/Carousel'
import MenuCategory from '../components/MenuCategory/MenuCategory'
import { i, a, e, t } from '../styles/PageTransitionStyles'
import Menu from '../components/Menu/Menu'

function Yellow() {
  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      className='page yellow'>
        <div className='carousel-container'>
        <Carousel />
        </div>
        <div className='menu-category-container'>
        <MenuCategory />
        </div>
        <div className='menu-container'>
          <Menu />
        </div>
    </motion.div>
  )
}

export default Yellow