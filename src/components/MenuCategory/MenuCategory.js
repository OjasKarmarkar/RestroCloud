import React from 'react'
import MenuCategoryItem from './MenuCategoryItem'
import './MenuCategory.css'

function MenuCategory({'categories': cats}) {
  return (
    <div className='menu-category'>
      {
        cats.map((item,index)=>{
            return <MenuCategoryItem itemId={item} key={index}/>
        })
      }
    </div>
  )
}

export default MenuCategory