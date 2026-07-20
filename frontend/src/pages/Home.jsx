import Hero from '../Components/Hero.jsx'
import FanFavorites from '../Components/FanFavorites.jsx'
import Reviews from '../Components/Reviews.jsx'
import ContactMap from '../Components/ContactMap.jsx'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = "Sleek Craft"
  }, [])
  return (
    <main>
      <Hero />
      <FanFavorites />
      <Reviews />
      <ContactMap />
    </main>
  )
}