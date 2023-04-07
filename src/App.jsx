import React from 'react'
import './index.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Basket from './components/Basket'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
    </div>
  )
}

export default App
