import { useState, useEffect } from 'react'
import { client, urlFor } from '../sanityClient'
import MenuCard from './MenuCard.jsx' // Reuse the component!
import './FanFavorites.css'

export default function FanFavorites() {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFavorites = async () => {
      // GROQ Query: Fetch the restaurantInfo document and EXPAND (->) the fanFavorites references
      const query = `*[_type == "restaurantInfo"][0] {
        fanFavorites[]-> {
          _id,
          name,
          price,
          ingredients,
          image
        }
      }`
      
      try {
        const data = await client.fetch(query)
        // If data.fanFavorites exists, use it. Otherwise, empty array.
        setFavorites(data.fanFavorites || [])
      } catch (error) {
        console.error("Error fetching fan favorites:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFavorites()
  }, [])

  if (loading) {
    return <div className="py-20 text-center">Loading Fan Favorites...</div>
  }

  // Hide the section entirely if the client hasn't selected any favorites in Sanity yet
  if (favorites.length === 0) {
    return null; 
  }

  return (
    <section className="favorites-section">
      <div className="favorites-container">
        
        <div className="favorites-header">
          <span className="favorites-subtitle">Most Loved</span>
          <h2 className="favorites-title">Our Fan Favorites</h2>
        </div>

        <div className="favorites-grid">
          {favorites.map((pizza) => {
            // Format the raw Sanity data exactly like we did in MenuGrid
            const formattedPizza = {
              id: pizza._id,
              name: pizza.name,
              price: `$${pizza.price.toFixed(2)}`,
              ingredients: pizza.ingredients,
              image: pizza.image ? urlFor(pizza.image).width(600).height(400).url() : ''
            }

            // Render the reusable MenuCard!
            return <MenuCard key={formattedPizza.id} pizza={formattedPizza} />
          })}
        </div>

      </div>
    </section>
  )
}