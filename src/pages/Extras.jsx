import '../styles/extras.css'
import { FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Extras() {
  const { t } = useTranslation()

  return (
    <div className="extras-page">
      <h2>{t('extras.title')}</h2>
      <p>{t('extras.description')}</p>
      <ul>
        <li>{t('extras.airportArrival')}</li>
        <li>{t('extras.airportDeparture')}</li>
        <li>{t('extras.polaroid')}</li>
        <li>{t('extras.surfboard')}</li>
        <li>{t('extras.toilet')}</li>
        <li>{t('extras.gas')}</li>
        <li>{t('extras.projector')}</li>
        <li>{t('extras.kayak')}</li>
        <li>{t('extras.paddle')}</li>
        <li>{t('extras.fishing')}</li>
        <li>{t('extras.snorkel')}</li>
        <li>{t('extras.childSeat')}</li>
      </ul>
      <a
        className="whatsapp-book-button"
        href="https://wa.me/351961176353?text=Hi!%20I%20want%20to%20book%20some%20extras%20for%20my%20Bumblebee%20trip%20🐝"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={22} />
        {t('extras.bookNow')}
      </a>
    </div>
  )
}
