import '../styles/dauphins.css'
import bgImage from '../assets/1.png'
import { Link } from 'react-router-dom'

export default function Dauphins() {
  return (
    <div
      className="dauphins-page"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="action-buttons">
      <Link to="/dolphins/photos" className="view-images-button">View Images</Link>
        <a
          className="whatsapp-book-button"
          href="https://wa.me/351961176353?text=Hi!%20I%20want%20to%20book%20some%20extras%20for%20my%20Bumblebee%20trip%20🐝"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book now
        </a>
      </div>
    </div>
  )
}
