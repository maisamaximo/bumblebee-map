import { FaWhatsapp } from 'react-icons/fa'
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
        href="https://wa.me/351000000000"
        className="whatsapp-reserve-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={20} />
        Reserve já
      </a>
    </div>
  )
}
