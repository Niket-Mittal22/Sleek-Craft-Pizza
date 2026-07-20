import { Star } from 'lucide-react'
import './Reviews.css'

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "The Hot Honey Pepperoni is life-changing. Perfectly crispy edges and just the right amount of kick! I order it every Friday."
    },
    {
      id: 2,
      name: "David T.",
      text: "I've been to Naples, and this Margherita Supreme is as close as it gets. The crust is unbelievably light and airy."
    },
    {
      id: 3,
      name: "Emily R.",
      text: "Best pizza in the city, hands down. The Truffle Mushroom & Ricotta made me tear up a little. Highly recommend!"
    },
    {
      id: 4,
      name: "Michael B.",
      text: "Delivery was lightning fast, and the pizza arrived piping hot. The cheese pull on the Classic Cheese was insane!"
    },
    {
      id: 5,
      name: "Jessica K.",
      text: "Finally, a place that doesn't skimp on toppings! The Hot Honey Pepperoni is dangerously good. I think about it daily."
    },
    {
      id: 6,
      name: "Alex W.",
      text: "Vegan options that actually taste amazing! The plant-based Margherita is perfection. My non-vegan friends loved it too."
    },
    {
      id: 7,
      name: "Olivia P.",
      text: "The garlic knots and the Truffle Mushroom pizza... I'm speechless. The flavors are so balanced. 10/10 will order again."
    },
    {
      id: 8,
      name: "James L.",
      text: "Incredible wood-fired taste. You can tell they use real, high-quality San Marzano tomatoes for their sauce."
    }
  ]

  // We duplicate the array to create the seamless infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="reviews-section">
      
      <div className="reviews-header">
        <span className="reviews-subtitle">Don't just take our word for it</span>
        <h2 className="reviews-title">Loved by Locals</h2>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          
          {duplicatedReviews.map((review, index) => (
            <div key={`${review.id}-${index}`} className="review-card">
              
              {/* 5-Star Rating */}
              <div className="stars-container">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Review Text */}
              <p className="review-text">"{review.text}"</p>

              {/* Author Info */}
              <div className="review-author">
                {/* Generates an avatar circle with the first letter of the name */}
                <div className="author-avatar">
                  {review.name.charAt(0)}
                </div>
                <span>{review.name}</span>
              </div>
              
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}