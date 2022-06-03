import React from 'react'
import { BsChevronUp} from 'react-icons/bs'

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
        className= 'bg-black text-white dark:bg-white dark:text-black border-2 border-slate-500  rounded-full flex justify-center items-center fixed bottom-10 right-10 font-bold text-lg h-14 w-14'>
        <BsChevronUp className='h-50% w-50%' />
    </button>
  )
}

export default ScrollTop