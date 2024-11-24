// App.jsx
import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Index from './components/Index'
import Details from './components/Details'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const updatedCart = [...cart, product]
    setCart(updatedCart)
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index)
    setCart(updatedCart)
  };

  return (
    <>
      <BrowserRouter>
        <Nav setSearch={setSearch} cartCount={cart.length} />
        <Routes>
          <Route path='/' element={<Index search={search} />} />
          <Route path='/details/:id' element={<Details addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
