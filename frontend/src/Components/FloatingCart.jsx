import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './FloatingCart.css'

export default function FloatingCart() {
  const { totalItems } = useCart()
  const location = useLocation()

  // If the user is currently on the /cart page, return null (don't render anything)
  if (location.pathname === '/cart') {
    return null
  }

  return (
    <div className="floating-cart-container">
      <Link to="/cart" className="floating-cart-btn" aria-label="Go to cart">
        <ShoppingBag size={24} />
        {totalItems > 0 && (
          <span className="floating-cart-badge">{totalItems}</span>
        )}
      </Link>
    </div>
  )
}