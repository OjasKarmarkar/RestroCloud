import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import ScrollTop from './components/ScrollTop'
import AnimatedRoutes from './components/AnimatedRoutes'
import './pages/Page.css'

function App() {
  return (
    <Router>
      <div className='bg-white dark:bg-black dark:text-white'>
      <Header />
      <AnimatedRoutes />
      <ScrollTop />
      </div>
    </Router>
  )
}

export default App