import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Index from './components/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' Component={Index}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
