import { useNavigate } from 'react-router-dom'
import '../styles/home.css'
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
      <p className="subtitle">Une carte interactive pour voyager</p>

      <img src={map} alt="Map" className="map-image" />

      <div className="button-grid">
        <button onClick={() => navigate('/photos')}>
          <img src={iconPhotos} alt="" />
          Voir davantage de photos
        </button>
        <button onClick={() => navigate('/extras')}>
          <img src={iconExtras} alt="" />
          Découvrir des extras
        </button>
        <button onClick={() => navigate('/spots')}>
          <img src={iconSpots} alt="" />
          Découvrir des spots
        </button>
        <button onClick={() => navigate('/estrants')}>
          <img src={iconBag} alt="" />
          Ajouter des estrants
        </button>
        <button onClick={() => navigate('/randonnee')}>
          <img src={iconHiking} alt="" />
          Randonnée
        </button>
      </div>

      <div className="activity-row">
        <button onClick={() => navigate('/dauphins')}>
          <img src={iconDolphins} alt="" />
          Dauphins
        </button>
        <button onClick={() => navigate('/canyoning')}>
          <img src={iconCanyoning} alt="" />
          Canyoning
        </button>
        <button onClick={() => navigate('/randotour')}>
          <img src={iconRandotour} alt="" />
          Randonnée +
        </button>
        <button onClick={() => navigate('/assurances')}>
          <img src={iconAssurances} alt="" />
          Assurances
        </button>
      </div>
    </div>
  )
}
