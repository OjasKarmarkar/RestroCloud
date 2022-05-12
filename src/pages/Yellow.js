import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Carousel } from '../components/Carousel/Carousel'
import MenuCategory from '../components/MenuCategory/MenuCategory'
import { i, a, e, t } from '../styles/PageTransitionStyles'
import Menu from '../components/Menu/Menu'
import axios from 'axios';
//import menuJSON from '../json/menu.json'


const categorize = (menu) => {
  const menuWithCategories = {}
  for (let item of Object.entries(menu.data)) {
      //console.log(item[1], item[1].course)
      let course = item[1].course
      if (menuWithCategories.hasOwnProperty(course)) {
        menuWithCategories[course] = [...menuWithCategories[course], item[1]]
      } else {
        menuWithCategories[course] = [item[1]]
      }
    }
  return menuWithCategories
  }

function Yellow() {
  const [menuObj, setMenuObj] = useState({})
  useEffect(() => {
    axios.get(`https://whispering-taiga-13938.herokuapp.com/api/menu`)
        .then(res => {
          let menuWCat = categorize(res.data)
          setMenuObj(menuWCat)
          //console.log(menuWCat);
        })
        //setMenuObj(categorize(menuJSON))
        //console.log(Object.keys(categorize(menuJSON)))
  },[])

  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      className='page bg-slate-200 dark:bg-black'>
        <div className='carousel-container'>
        <Carousel />
        </div>
        <div className='menu-category-container'>
        <MenuCategory categories={Object.keys(menuObj)} />
        </div>
        <div className='menu-container'>
          <Menu items={menuObj} />
        </div>
    </motion.div>
  )
}

export default Yellow