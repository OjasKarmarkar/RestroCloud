import React from 'react'
import MenuCategoryItem from './MenuCategoryItem'
import './MenuCategory.css'

function MenuCategory({'categories': cats}) {
  return (
    <div class="py-10 px-10 flex flex-col md:flex-row gap-20">
      {
        cats.map((item,index)=>{
            return <MenuCategoryItem itemId={item} key={index}/>
        })
      }
    </div>
  )
}

export default MenuCategory