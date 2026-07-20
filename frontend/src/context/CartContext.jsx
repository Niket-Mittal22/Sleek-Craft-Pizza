import { createContext, useState, useContext, useEffect } from 'react'

// 1. Create the Context
const CartContext = createContext()

// 2. Create the Provider Component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('pizza_cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  useEffect(() => {
    localStorage.setItem('pizza_cart', JSON.stringify(cartItems))
  }, [cartItems])

  // Add item to cart (or increase quantity if it already exists)
  const addToCart = (pizza) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === pizza.id)
      
      if (existingItem) {
        // If pizza is already in cart, just increase the quantity
        return prevItems.map(item => 
          item.id === pizza.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      }
      
      // If it's a new pizza, add it with quantity 1
      return [...prevItems, { ...pizza, quantity: 1 }]
    })
  }

  // Remove item completely
  const removeFromCart = (pizzaId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== pizzaId))
  }

  // Update quantity (for the + and - buttons on the cart page)
  const updateQuantity = (pizzaId, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === pizzaId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Calculate total price
  const cartTotal = cartItems.reduce((total, item) => {
    // Remove the '$' sign and convert to a number for math
    const numericPrice = parseFloat(item.price.replace('$', ''))
    return total + (numericPrice * item.quantity)
  }, 0)

  // Calculate total number of items for the Navbar badge
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      cartTotal,
      totalItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

// 3. Custom Hook for easy access in other components
export const useCart = () => useContext(CartContext)