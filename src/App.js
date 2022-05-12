import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import ScrollTop from './components/ScrollTop'
import AnimatedRoutes from './components/AnimatedRoutes'
import './pages/Page.css'

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <ScrollTop />
    </Router>
  )
}

export default App