import whatsappIcon from '../assets/whatsapp.png'
import '../styles/dauphins.css'
import bgImage from '../assets/dauphins-bg.jpg'

export default function Dauphins() {
  return (
    <div
      className="dauphins-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        position: 'relative'
      }}
    >
      <a
        href="https://wa.me/351961176353?text=Hello%2C%20I%27m%20interested%20in%20more%20information%20about%20the%20Dolphins%20Experience"
        className="whatsapp-button-image"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  )
}
