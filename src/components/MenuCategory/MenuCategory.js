import React from 'react'
import MenuCategoryItem from './MenuCategoryItem'
import './MenuCategory.css'

function MenuCategory() {
  return (
    <div className='menu-category'>
        <MenuCategoryItem itemId={1}/>
        <MenuCategoryItem itemId={2}/>
        <MenuCategoryItem itemId={3}/>
        <MenuCategoryItem itemId={4}/>
        <MenuCategoryItem itemId={5}/>
        <MenuCategoryItem itemId={6}/>
        <MenuCategoryItem itemId={7}/>
        <MenuCategoryItem itemId={8}/>
        <MenuCategoryItem itemId={9}/>
    </div>
  )
}

export default MenuCategory