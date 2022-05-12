import React from 'react'

function MenuCategoryItem({itemId}) {
  const handleClick = () => {
    var element = document.getElementById(itemId);
    element.scrollIntoView({block:"start", behavior:"smooth"});
  }
  return (
    <button 
      onClick={handleClick}
      className='menu-category-item font-xl bg-white text-black dark:bg-slate-800 dark:text-white'>
      {itemId}
    </button>
  )
}

export default MenuCategoryItem