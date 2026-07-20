import Hero from '../components/Hero'
import FanFavorites from '../components/FanFavorites'
import Reviews from '../components/Reviews'
import ContactMap from '../components/ContactMap'

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