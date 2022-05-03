import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import HeaderBg from './components/Header/HeaderBg'
import AnimatedRoutes from './components/AnimatedRoutes'
import './pages/Page.css'

function App() {
  return (
    <Router>
      <Header />
      <HeaderBg />
      <AnimatedRoutes />
    </Router>
  )
}

export default App