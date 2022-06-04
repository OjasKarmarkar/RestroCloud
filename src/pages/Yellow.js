import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
      className='page bg-slate-200 dark:bg-black pt-20'>
        { loading &&
          <div className='bg-white text-black dark:bg-slate-700 dark:text-white w-auto h-12 fixed top-20 z-50 p-5 text-xl flex items-center rounded-lg animate-pulse'
          >
            <p>Loading</p>
          </div>
        }
                <section id="home">
            <div className="px-24 py-8 flex flex-col md:flex-row justify-between h-screen">
                <div className="lg:mx-20 flex flex-col my-10 sm:my-0 gap-x-4 lg:gap-y-10 gap-y-8">
                  <p className='text-neutral-500'>(#Table ID : 628210ec1035265f44981a60)</p>
                    <div className="lg:leading-normal text-3xl lg:text-5xl font-black">
                        Eat.
                        Treat. Repeat.</div>
                    <div className="text-l font-normal lg:leading-normal">
                    RestroCloud makes ordering food at your favorite restaurant simple. Say 'NO!' to remembering your desired order; and also to a goof-up spoiling your time! 
                    </div>
                    <div className="flex flex-row gap-x-4 font-semibold">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#64e7a6" viewBox="0 0 24 24" stroke="white"
                            className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Fluid and easy-to-use interface



                    </div>

                    <div className="flex flex-row gap-x-4 font-semibold">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#64e7a6" viewBox="0 0 24 24" stroke="white"
                            className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Electronic Bill Generation on-the-go



                    </div>

                </div>

                <div className="flex-shrink-0 flex-grow-0 sm:m-10 sm:w-1/2"><img src="img.png" alt=''></img></div>
            </div>

        </section>
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