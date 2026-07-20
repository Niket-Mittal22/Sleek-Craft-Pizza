
import ContactMap from '../Components/ContactMap'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Sleek Craft"
  }, [])
  return (
    <main>
      <ContactMap />
    </main>
  )
}