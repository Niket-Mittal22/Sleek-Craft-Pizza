import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast' // 1. Import the Toaster
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import MenuPage from './pages/MenuPage.jsx'
import StoryPage from './pages/StoryPage.jsx'
import Contact from './pages/Contact.jsx'
import CartPage from './pages/CartPage.jsx'

export default function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="min-h-screen font-sans">
        
        {/* 2. Place Toaster here. It stays hidden until triggered! */} 
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '10px',
            },
          }}
        />

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<StoryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  )
}