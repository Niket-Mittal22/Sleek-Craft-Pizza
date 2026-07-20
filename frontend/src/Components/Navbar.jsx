import { useState } from 'react'
import { Menu, X, Phone, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx' // 1. Import the hook
import { Link } from 'react-router-dom' // Use Link for internal routing
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  // 2. Extract totalItems from your global cart state
  const { totalItems } = useCart() 

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-wrapper">
          
          <Link to="/" className="navbar-logo">
            <span className="logo-emoji">🍕</span>
            <span className="logo-text">
              Slice<span>&</span>Craft
            </span>
          </Link>

          <nav className="nav-links-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/about" className="nav-link">Our Story</Link>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="navbar-actions">
            <a href="tel:+1234567890" className="phone-btn" title="Call Us">
              <Phone className="phone-icon" />
              <span className="phone-text">(555) 019-2834</span>
            </a>
            
            {/* 3. Change to Link and add the Dynamic Badge */}
            <Link to="/cart" className="order-btn" style={{ position: 'relative' }}>
              <ShoppingBag className="btn-icon" />
              <span>Cart</span>
              
              {/* Only show the badge if there is something in the cart */}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Truncated for brevity, just update the Cart button here too) */}
      {isOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
             {/* ... your mobile links ... */}
          </nav>
          <div className="mobile-actions">
            <Link to="/cart" onClick={() => setIsOpen(false)} className="mobile-order-btn">
              <ShoppingBag size={20} />
              <span>Cart ({totalItems})</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}