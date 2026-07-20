import './StoryPage.css'
import StoryPageImage from '../assets/storypage.jpg'
import { useEffect } from 'react'

export default function StoryPage() {
  useEffect(() => {
    document.title = "Our Story - Sleek Craft"
  }, [])
  const branches = [
    {
      id: 1,
      name: "Downtown Culinary District",
      address: "123 Pizza Street, New York, NY 10001",
      phone: "(555) 019-2834",
      status: "Our Original Flagship"
    },
    {
      id: 2,
      name: "Westside Market Square",
      address: "840 Oven Avenue, New York, NY 10014",
      phone: "(555) 019-8821",
      status: "Opened 2021"
    },
    {
      id: 3,
      name: "North Hills (Drive-Thru & Dine)",
      address: "55 Pine Road, Brooklyn, NY 11201",
      phone: "(555) 019-4450",
      status: "Opened 2023"
    }
  ]

  return (
    <main className="story-page">
      
      {/* Hero Banner */}
      <section className="story-hero">
        <div>
          <h1>Our Story</h1>
          <p>From a small brick oven in a garage to the city's favorite slice.</p>
        </div>
      </section>

      {/* Magazine-style Text Content */}
      <article className="story-content">
        <h2>It Started with a Burnt Crust</h2>
        <p>
          Back in 2018, Sleek & Craft wasn't a restaurant—it was just a passionate obsession in a cramped backyard. Our founder spent months trying to replicate the authentic, airy, blistered crusts of Naples. 
        </p>
        <p>
          There were a lot of mistakes. Hundreds of burnt crusts, collapsed doughs, and smoke alarms. But then, on a rainy Tuesday evening, the perfect dough was pulled from the homemade wood-fired oven. It was crispy on the outside, incredibly chewy on the inside, and tasted like magic.
        </p>

        <img 
          src={StoryPageImage}
          alt="Chef pulling pizza out of a wood-fired oven" 
          className="story-image"
        />

        <h2>The Secret is Patience</h2>
        <p>
          We realized that great pizza can't be rushed. While fast-food chains focus on speed, we decided to focus on time. Our signature dough is cold-fermented for 72 hours. This long rest breaks down the gluten, making it incredibly easy to digest and developing a deep, complex flavor that you simply can't get in a quick bake.
        </p>
        <p>
          We paired our dough with hand-crushed San Marzano tomatoes, fresh basil, and locally sourced mozzarella. When we opened our first tiny shop in the Culinary District, we sold out in three hours. 
        </p>

        <h2>Growing the Family</h2>
        <p>
          Today, we've grown beyond that single tiny shop, but our philosophy hasn't changed one bit. We still ferment our dough for 72 hours. We still fire our pizzas at 900 degrees. And we still believe that a great slice of pizza has the power to turn a bad day into a good one.
        </p>
      </article>

      {/* Branches Grid */}
      <section className="branches-section">
        <div className="branches-header">
          <h2>Where to Find Us Today</h2>
        </div>
        
        <div className="branches-grid">
          {branches.map(branch => (
            <div key={branch.id} className="branch-card">
              <span className="text-red-600 font-bold text-sm uppercase tracking-wider mb-2 block">
                {branch.status}
              </span>
              <h3>{branch.name}</h3>
              <p>{branch.address}</p>
              <p className="mt-2 font-semibold">{branch.phone}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}