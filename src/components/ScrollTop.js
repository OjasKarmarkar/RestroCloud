import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

function ScrollTop() {
  const handleClick = () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      })
  }

  return (
    <button 
        onClick={handleClick}
        className= 'bg-black text-white dark:bg-white dark:text-black border-2 border-slate-500  rounded-full flex justify-center items-center fixed bottom-10 right-10 font-bold text-lg h-10 w-10'>
        <BsFillArrowUpCircleFill className='h-full w-full' />
    </button>
  )
}

export default ScrollTop