import { useState } from 'react'
import { useCart } from '../context/CartContext' // 1. Import the hook
import './MenuCard.css'

export default function MenuCard({ pizza }) {
  const { addToCart } = useCart() // 2. Grab the addToCart function
  const [isAdded, setIsAdded] = useState(false) // 3. State for button feedback

  const handleAddToCart = () => {
    addToCart(pizza) // Send the pizza to global state
    
    // Show visual feedback for 2 seconds
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <div className="menu-card">
      <img src={pizza.image} alt={pizza.name} className="menu-card-image" />
      <div className="menu-card-body">
        
        <div className="menu-card-header">
          <h3 className="menu-card-title">{pizza.name}</h3>
          <span className="menu-card-price">{pizza.price}</span>
        </div>
        
        <p className="menu-card-ingredients">{pizza.ingredients}</p>
        
        {/* 4. Connect the button to the handler */}
        <button 
          onClick={handleAddToCart} 
          className="menu-card-btn"
          style={{
            backgroundColor: isAdded ? '#16a34a' : '', // Turns green when added
            color: isAdded ? 'white' : ''
          }}
        >
          {isAdded ? 'Added! ✓' : 'Add to Order'}
        </button>
        
      </div>
    </div>
  )
}