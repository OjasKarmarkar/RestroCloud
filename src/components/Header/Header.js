import React from 'react'
import { Link } from 'react-router-dom'
import { MdFastfood } from 'react-icons/md'
import { BsCart2, BsPerson } from 'react-icons/bs'

function Header() {
  return (
    <div className='fixed top-0 bg-black text-white flex w-screen justify-around items-center py-2 h-10 z-50'>
      <div className='flex'>
        <MdFastfood size={30} /> <p>RestroCloud</p>
      </div>
      <div className='flex space-x-5'>
        <Link to="/home" style={{textDecoration: "none", fontSize:"1.25em"}}>Home</Link>
        <Link to="/orders" style={{textDecoration: "none", fontSize:"1.25em"}}>Orders</Link>
        <Link to="/billing" style={{textDecoration: "none", fontSize:"1.25em"}}>Billing</Link>
      </div>
      <div className='flex '>
      <BsCart2 size={25}/><BsPerson size={25}/>
      </div>
    </div>
  )
}

export default Header