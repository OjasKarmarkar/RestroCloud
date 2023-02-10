import React from 'react'
import { Link } from 'react-router-dom'
import { MdFastfood } from 'react-icons/md'
import { AiFillGithub } from "react-icons/ai";
import { useState , useEffect } from 'react'

function Header() {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className={'fixed top-0  text-black dark:bg-slate-900 dark:text-white font-semibold flex w-screen justify-around items-center py-4 h-20 z-50 ' + (navbar ? "bg-white" : null)}>
      <div className='flex'>
        <MdFastfood size={30} /> <div className='px-2 py-2'> <p>RestroCloud</p></div>
      </div>
      <div className='flexz space-x-10'>
        <Link to="/home" style={{textDecoration: "none", fontSize:"1.25em"}}>Home</Link>
        <Link to="/orders" style={{textDecoration: "none", fontSize:"1.25em"}}>My Orders</Link>
        <Link to="/billing" style={{textDecoration: "none", fontSize:"1.25em"}}>Billing</Link>
      </div>
      <div className='flex justify-center'>
        <button>
          <a href="https://github.com/OjasKarmarkar/RestroCloud" target="_blank" rel="noreferrer noopener">
            <AiFillGithub size={30}/>
          </a>
        </button>
        <button className='px-4'>          
        </button>
      {/* <BsPerson size={25}/> */}
      </div>
    </div>
  )
}

export default Header