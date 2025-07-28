import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import whatsappIcon from '../assets/whatsapp.png'
import '../styles/home.css'

import map from '../assets/map.png'
import iconPhotos from '../assets/icon-photos.png'
import iconExtras from '../assets/icon-extras.png'
import iconSpots from '../assets/icon-spots.png'
import iconHiking from '../assets/icon-hiking.png'
import iconDolphins from '../assets/icon-dolphin.png'
import iconCanyoning from '../assets/icon-canyoning.png'
import iconParagliding from '../assets/icon-paragliding.png'
import iconInsurance from '../assets/icon-insurance.png'
import iconRestaurants from '../assets/icon-restaurant.png'

export default function Home() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef()

  const languages = {
    en: '🇬🇧',
    fr: '🇫🇷',
    it: '🇮🇹',
    de: '🇩🇪'
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLangOpen(false)
  }

  return (
    <div className="home">
      <div className="lang-dropdown" ref={langRef}>
        <button
          className="lang-button"
          onClick={() => setLangOpen(prev => !prev)}
        >
          {languages[i18n.language]}
        </button>
        {langOpen && (
          <div className="lang-options">
            {Object.entries(languages).map(([lng, flag]) =>
              lng !== i18n.language ? (
                <button
                  key={lng}
                  className="lang-option"
                  onClick={() => changeLanguage(lng)}
                >
                  {flag}
                </button>
              ) : null
            )}
          </div>
        )}
      </div>

      <h1>{t('title')}</h1>
      <p className="subtitle">{t('subtitle')}</p>

      <img src={map} alt="Map" className="map-image" />

      <div className="button-grid">
        <button onClick={() => navigate('/photos')}>
          <img src={iconPhotos} alt="" />
          {t('photos')}
        </button>
        <button onClick={() => navigate('/extras')}>
          <img src={iconExtras} alt="" />
          {t('extras')}
        </button>
        <button onClick={() => navigate('/spots')}>
          <img src={iconSpots} alt="" />
          {t('spots')}
        </button>
        <button onClick={() => navigate('/hiking')}>
          <img src={iconHiking} alt="" />
          {t('hiking')}
        </button>
        <button onClick={() => navigate('/restaurants')}>
          <img src={iconRestaurants} alt="" />
          {t('restaurants')}
        </button>
        <button onClick={() => navigate('/insurance')}>
          <img src={iconInsurance} alt="" />
          {t('insurance')}
        </button>
      </div>

      <h2 className="experience-subtitle">{t('bookYourExperience')}</h2>

      <div className="activity-icons">
        <div className="activity" onClick={() => navigate('/dolphins')}>
          <img src={iconDolphins} alt="Dolphins" />
          <span>{t('dolphins')}</span>
        </div>
        <div className="activity" onClick={() => navigate('/canyoning')}>
          <img src={iconCanyoning} alt="Canyoning" />
          <span>{t('canyoning')}</span>
        </div>
        <div className="activity" onClick={() => navigate('/paragliding')}>
          <img src={iconParagliding} alt="Paragliding" />
          <span>{t('paragliding')}</span>
        </div>
      </div>

      <a
        href="https://wa.me/351961176353?text=Hello%2C%20I%27m%20interested%20in%20more%20information%20about%20the%20Bumblebee%20experience%20%F0%9F%90%9D"
        className="whatsapp-button-image"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  )
}