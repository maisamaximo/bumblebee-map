import { useNavigate } from 'react-router-dom'
import '../styles/home.css'
import { FaWhatsapp } from 'react-icons/fa'

import map from '../assets/map.png'
import iconPhotos from '../assets/icon-photos.png'
import iconExtras from '../assets/icon-extras.png'
import iconSpots from '../assets/icon-spots.png'
import iconBag from '../assets/icon-bag.png'
import iconHiking from '../assets/icon-hiking.png'
import iconDolphins from '../assets/icon-dolphin.png'
import iconCanyoning from '../assets/icon-canyoning.png'
import iconRandotour from '../assets/icon-rando.png'
import iconAssurances from '../assets/icon-insurance.png'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1>Bumblebee Explorations</h1>
      <p className="subtitle">An interactive travel guide</p>

      <img src={map} alt="Map" className="map-image" />

      <div className="button-grid">
        <button onClick={() => navigate('/photos')}>
          <img src={iconPhotos} alt="" />
          View more photos
        </button>
        <button onClick={() => navigate('/extras')}>
          <img src={iconExtras} alt="" />
          Discover extras
        </button>
        <button onClick={() => navigate('/spots')}>
          <img src={iconSpots} alt="" />
          Discover spots
        </button>
        <button onClick={() => navigate('/estrants')}>
          <img src={iconBag} alt="" />
          Add gear
        </button>
        <button onClick={() => navigate('/hiking')}>
          <img src={iconHiking} alt="" />
          Hiking
        </button>
      </div>

      <div className="activity-icons">
        <div className="activity" onClick={() => navigate('/dolphins')}>
          <img src={iconDolphins} alt="Dolphins" />
          <span>Dolphins</span>
        </div>
        <div className="activity" onClick={() => navigate('/canyoning')}>
          <img src={iconCanyoning} alt="Canyoning" />
          <span>Canyoning</span>
        </div>
        <div className="activity" onClick={() => navigate('/hiking-tour')}>
          <img src={iconRandotour} alt="Hiking Tour" />
          <span>Hiking Tour</span>
        </div>
        <div className="activity" onClick={() => navigate('/insurance')}>
          <img src={iconAssurances} alt="Insurance" />
          <span>Insurance</span>
        </div>
      </div>

      <a
        href="https://wa.me/351000000000"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={20} />
        Contact us
      </a>
    </div>
  )
}
