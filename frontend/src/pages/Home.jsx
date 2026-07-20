import Hero from '../components/Hero.jsx'
import FanFavorites from '../components/FanFavorites.jsx'
import Reviews from '../components/Reviews.jsx'
import ContactMap from '../components/ContactMap.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <FanFavorites />
      <Reviews />
      <ContactMap />
    </main>
  )
}