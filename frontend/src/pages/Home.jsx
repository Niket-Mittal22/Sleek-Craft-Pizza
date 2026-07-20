import Hero from '../Components/Hero.jsx'
import FanFavorites from '../Components/FanFavorites.jsx'
import Reviews from '../Components/Reviews.jsx'
import ContactMap from '../Components/ContactMap.jsx'

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