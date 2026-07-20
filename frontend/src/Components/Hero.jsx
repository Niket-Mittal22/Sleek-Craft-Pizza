import { ArrowRight } from 'lucide-react'
import './Hero.css'
import heroPizzaImage from '../assets/hero-pizza.jpg'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        {/* Left Column: Text */}
        <div className="hero-text-content">
          <span className="hero-badge">🔥 Fresh out of the wood-fired oven</span>
          
          <h1 className="hero-title">
            Hot, Cheesy, & <br />
            <span className="highlight-text">Absolutely Delicious</span>
          </h1>
          
          <p className="hero-subtitle">
            Order from a huge variety of our cheesy, hand-tossed pizzas. Made fresh daily with premium ingredients, secret sauce, and baked to perfection.
          </p>
          
          <div className="hero-buttons">
            <a href="/menu" className="btn-primary">
              View Our Menu <ArrowRight size={20} />
            </a>
            <a href="/contact" className="btn-secondary">
              Book a Table
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hero-image-content">
          <div className="image-glow"></div>
          <img 
            src={heroPizzaImage} 
            alt="Delicious hot cheesy pizza slice being pulled" 
            className="hero-pizza-image"
          />
        </div>
        
      </div>
    </section>
  )
}