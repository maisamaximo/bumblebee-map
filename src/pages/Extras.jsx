import '../styles/extras.css'
import { FaWhatsapp } from 'react-icons/fa'

export default function Extras() {
  return (
    <div className="extras-page">
      <h2>🎒 Extras</h2>
      <p>
        All extras are available upon request — please book them in advance so we can prepare everything for your trip!
      </p>
      <ul>
        <li>🚕 Airport transfer (arrival): <strong>€25</strong></li>
        <li>🚕 Airport transfer (departure): <strong>€25</strong></li>
        <li>📸 Polaroid + roll of 10 shots: <strong>€20</strong> or <strong>€7.50</strong> for the camera only</li>
        <li>🏄‍♂️ Surfboard: <strong>€15/day</strong> – <strong>€50/trip</strong></li>
        <li>🚽 Dry toilet: <strong>€20</strong></li>
        <li>⛽️ Gas bottle: <strong>€8</strong></li>
        <li>📽️ Video projector: <strong>€25</strong></li>
        <li>🛶 Kayak: <strong>€30/day</strong> – <strong>€80/trip</strong></li>
        <li>💦 Paddleboard: <strong>€20/day</strong> – <strong>€60/trip</strong></li>
        <li>🎣 Fishing kit: <strong>€15/day</strong> – <strong>€40/trip</strong></li>
        <li>🤿 Snorkeling kit: <strong>€10/day</strong> – <strong>€30/trip</strong></li>
        <li>👧🏼 Child seat: <strong>€30</strong></li>
      </ul>
      <a
        className="whatsapp-book-button"
        href="https://wa.me/351961176353?text=Hi!%20I%20want%20to%20book%20some%20extras%20for%20my%20Bumblebee%20trip%20🐝"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={22} />
        Book now
      </a>
    </div>
  )
}
