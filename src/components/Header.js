import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/yellow" style={{textDecoration: "none", color: "white", fontSize:"1.25em"}}>Yellow</Link>
        <Link to="/green" style={{textDecoration: "none", color: "white", fontSize:"1.25em"}}>Green</Link>
        <Link to="/blue" style={{textDecoration: "none", color: "white", fontSize:"1.25em"}}>Blue</Link>
    </div>
  )
}

export default Header