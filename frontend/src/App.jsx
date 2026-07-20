import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import FloatingCart from './Components/FloatingCart.jsx'
import Home from './pages/Home.jsx'
import MenuPage from './pages/MenuPage.jsx'
import StoryPage from './pages/StoryPage.jsx'
import Contact from './pages/Contact.jsx'
import CartPage from './pages/CartPage.jsx'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        
        {/* 1. Added 'flex flex-col' here to enable vertical layout */}
        <div className="flex flex-col min-h-screen font-sans">
          
          <Navbar />
          
          {/* 2. 'flex-grow' forces this main area to expand and push Footer to the bottom */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<StoryPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          
          <Footer />
          <FloatingCart />
        </div>
        
      </BrowserRouter>
    </CartProvider>
  )
}