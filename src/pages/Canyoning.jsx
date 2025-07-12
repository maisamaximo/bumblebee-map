import { FaWhatsapp } from 'react-icons/fa'
import '../styles/canyoning.css'
import bgImage from '../assets/canyoning-bg.jpg' 

export default function Canyoning() {
  return (
    <div
      className="canyoning-page"
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
