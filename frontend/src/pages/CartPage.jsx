import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import './CartPage.css'

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()

  // Calculate some mock taxes and fees for realism
  const taxRate = 0.08 // 8% tax
  const taxAmount = cartTotal * taxRate
  const deliveryFee = cartTotal > 0 ? 4.99 : 0
  const finalTotal = cartTotal + taxAmount + deliveryFee

  // Render an empty state if the cart has no items
  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any delicious pizzas yet!</p>
          <Link to="/menu" className="back-to-menu-btn">
            Browse Our Menu
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        
        <h1 className="cart-title">Your Order</h1>

        <div className="cart-grid">
          
          {/* Left Column: The Items */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <span className="cart-item-price">{item.price}</span>
                </div>

                <div className="cart-item-actions">
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="remove-btn"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>

                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                      disabled={item.quantity <= 1} // Prevent going below 1
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="qty-number">{item.quantity}</span>
                    
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary */}
          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Estimated Tax (8%)</span>
              <span>${taxAmount.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span className="text-red-600">${finalTotal.toFixed(2)}</span>
            </div>

            <button 
              className="checkout-btn"
              onClick={() => alert('This would redirect to Stripe/Checkout in a real app!')}
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}