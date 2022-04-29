import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import AnimatedRoutes from './components/AnimatedRoutes'
import './pages/Page.css'

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  )
}

export default App