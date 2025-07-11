import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'
import '../styles/home.css'

import map from '../assets/map.png'
import iconPhotos from '../assets/icon-photos.png'
import iconExtras from '../assets/icon-extras.png'
import iconSpots from '../assets/icon-spots.png'
import iconBag from '../assets/icon-bag.png'
import iconHiking from '../assets/icon-hiking.png'
import iconDolphins from '../assets/icon-dolphin.png'
import iconCanyoning from '../assets/icon-canyoning.png'
import iconParagliding from '../assets/icon-rando.png'
import iconAssurances from '../assets/icon-insurance.png'

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

  // Fecha o menu ao clicar fora
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
      {/* Language Selector */}
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
        <button onClick={() => navigate('/estrants')}>
          <img src={iconBag} alt="" />
          {t('gear')}
        </button>
        <button onClick={() => navigate('/hiking')}>
          <img src={iconHiking} alt="" />
          {t('hiking')}
        </button>
      </div>

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
          <img src={iconParagliding} alt="Hiking Tour" />
          <span>{t('hikingTour')}</span>
        </div>
        <div className="activity" onClick={() => navigate('/insurance')}>
          <img src={iconAssurances} alt="Insurance" />
          <span>{t('insurance')}</span>
        </div>
      </div>

      <a
        href="https://wa.me/351000000000"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={20} />
        {t('contact')}
      </a>
    </div>
  )
}
