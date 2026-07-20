import { useState, useEffect } from 'react'
import { client, urlFor } from '../sanityClient'
import MenuCard from './MenuCard'
import './MenuGrid.css'

export default function MenuGrid() {
  const [allPizzas, setAllPizzas] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  // Fetch data from Sanity when the component loads
  useEffect(() => {
    const fetchPizzas = async () => {
      // GROQ Query: Fetch all documents of type "pizza" where isAvailable is true
      const query = `*[_type == "pizza"] {
        _id,
        name,
        price,
        category,
        ingredients,
        image
      }`
      
      try {
        const data = await client.fetch(query)
        setAllPizzas(data)
      } catch (error) {
        console.error("Error fetching pizzas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, [])

  const categories = ['All', 'Classic', 'Specialty', 'Veg']

  // Filter logic based on the active tab
  const filteredPizzas = activeCategory === 'All' 
    ? allPizzas 
    : allPizzas.filter(pizza => pizza.category === activeCategory)

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-xl font-bold text-stone-500 animate-pulse">Heating up the oven (Loading menu)...</p>
      </div>
    )
  }

  return (
    <div className="menu-grid-section">
      
      {/* Category Tabs */}
      <div className="menu-filters">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="menu-grid-container">
        {filteredPizzas.map(pizza => {
          // Format the raw Sanity data to match what MenuCard expects
          const formattedPizza = {
            id: pizza._id,
            name: pizza.name,
            price: `$${pizza.price.toFixed(2)}`, // Formats number to price (e.g., 14 -> $14.00)
            ingredients: pizza.ingredients,
            // Only attempt to build URL if an image was actually uploaded
            image: pizza.image ? urlFor(pizza.image).width(600).height(400).url() : ''
          }

          return <MenuCard key={formattedPizza.id} pizza={formattedPizza} />
        })}
      </div>

    </div>
  )
}