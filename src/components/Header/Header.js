import React from 'react'
import { Link } from 'react-router-dom'
import { MdFastfood } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'

function Header() {
  return (
    <div className='fixed top-0 bg-black text-white dark:bg-slate-900 flex w-screen items-center py-2 h-10 z-50'>
      <div className='flex w-1/5 justify-center'>
        <MdFastfood size={30} /> <p className='hidden md:block'>RestroCloud</p>
      </div>
      <div className='flex w-3/5 justify-center space-x-5'>
        <Link to="/home" style={{textDecoration: "none", fontSize:"1.25em"}}>Home</Link>
        <Link to="/orders" style={{textDecoration: "none", fontSize:"1.25em"}}>Orders</Link>
        <Link to="/billing" style={{textDecoration: "none", fontSize:"1.25em"}}>Billing</Link>
      </div>
      <div className='flex w-1/5 justify-center'>
        <button>
          <a href="https://github.com/OjasKarmarkar/RestroCloud" target="_blank" rel="noreferrer noopener">
            <AiFillGithub size={30}/>
          </a>
        </button>
      {/* <BsPerson size={25}/> */}
      </div>
    </div>
  )
}

export default Header