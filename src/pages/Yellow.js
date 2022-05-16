import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Carousel } from '../components/Carousel/Carousel'
import MenuCategory from '../components/MenuCategory/MenuCategory'
import { i, a, e, t } from '../styles/PageTransitionStyles'
import Menu from '../components/Menu/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { updateMenu } from '../features/menuSlice'
import axios from 'axios';
//import menuJSON from '../json/menu.json'


const categorize = (menu) => {
  const menuWithCategories = {}
  for (let item of Object.entries(menu.data)) {
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
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const cachedMenu = useSelector( state => state.menu.value ) 

  useEffect(() => {
    if (cachedMenu === "EMPTY MENU")
    {
      axios.get(`https://whispering-taiga-13938.herokuapp.com/api/menu`)
          .then(res => {
            let menuWCat = categorize(res.data)
            setMenuObj(menuWCat)
            dispatch(updateMenu(menuWCat))
            setLoading(false)
          })
        } else {
          setMenuObj(cachedMenu)
          setLoading(false)
    }
     // eslint-disable-next-line
  },[])

  return (
    <motion.div 
      initial = {i}
      animate = {a}
      exit = {e}
      transition = {t}
      className='page bg-slate-200 dark:bg-black'>
        { loading &&
          <div className='bg-white text-black dark:bg-slate-700 dark:text-white w-auto h-12 fixed top-20 z-50 p-5 text-xl flex items-center rounded-lg animate-pulse'
          >
            <p>Loading</p>
          </div>
        }
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