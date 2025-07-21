import { useState } from 'react'

import './App.css'
import Products from './Products'
import Cart from './Cart'

function App() {

  const [cart, setCart] = useState([])

  const [showcart, setShowCart] = useState(false)

  const [value, setValue] = useState(()=>{
    fetch('https://raw.githubusercontent.com/dev8093/assets/main/products.json')
    .then(res => res.json())
    .then(data => {setValue(data)})
    .catch(err => console.log('Error', err))

    return [];
  })



  const addtocart  = (product) => { 
    console.log(product)
    const alreadyInCart = cart.some(item => item.id === product.id)
    if(!alreadyInCart){
      setCart([...cart, product])
    }
    console.log(`${product.title} added to cart`);
  }

  const   removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const toggleCart = () => {
    setShowCart(prev => !prev)
  }

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      background: '#f5f5f5', 
      minHeight: '100vh', 
      padding: '40px 0' 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '30px' 
      }}>
        <button 
          onClick={toggleCart} 
          style={{ 
            padding: '12px 28px', 
            fontSize: '18px', 
            borderRadius: '8px', 
            border: 'none', 
            background: '#007bff', 
            color: '#fff', 
            cursor: 'pointer', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
          }}
        >
          {showcart ? 'Hide Cart' : '🛒'}
        </button>
      </div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '40px' 
      }}>
        <Products value={value} addtocart={addtocart} />
        {showcart && (
          <div style={{ minWidth: '350px' }}>
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
