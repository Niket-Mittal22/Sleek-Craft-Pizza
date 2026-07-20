import { useState, useEffect } from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { client } from '../sanityClient'
import './ContactMap.css'

export default function ContactMap() {
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInfo = async () => {
      // GROQ Query: Fetch the first document of type "restaurantInfo"
      const query = `*[_type == "restaurantInfo"][0]`
      
      try {
        const data = await client.fetch(query)
        setInfo(data)
      } catch (error) {
        console.error("Error fetching restaurant info:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchInfo()
  }, [])

  if (loading || !info) {
    return <div className="py-20 text-center">Loading contact info...</div>
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-header">
          <span className="contact-subtitle">Come Visit Us</span>
          <h2 className="contact-title">Reach Us</h2>
        </div>

        <div className="contact-content">
          
          {/* Left Column: Details & Hours */}
          <div className="contact-info-box">
            
            <div className="info-group">
              <div className="info-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h3>Our Location</h3>
                {/* CSS whitespace-pre-line ensures line breaks in the Sanity text area are respected */}
                <p style={{ whiteSpace: 'pre-line' }}>{info.address}</p>
              </div>
            </div>

            <div className="info-group">
              <div className="info-icon-wrapper">
                <Clock size={24} />
              </div>
              <div className="info-text">
                <h3>Operating Hours</h3>
                <ul className="hours-list">
                  {info.operatingHours?.map((slot, index) => (
                    <li key={index}>
                      <span>{slot.days}</span> 
                      <span>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info-group">
              <div className="info-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h3>Contact</h3>
                <p>{info.phone}</p>
              </div>
            </div>

            <div className="info-group">
              <div className="info-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>{info.email}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Google Maps iframe */}
          <div className="map-container">
            {info.mapUrl ? (
              <iframe 
                src={info.mapUrl}
                className="map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location Map"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                Map unavailable
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}