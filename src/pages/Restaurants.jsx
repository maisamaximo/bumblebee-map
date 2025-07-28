import '../styles/info.css'
import { useTranslation } from 'react-i18next'

export default function Restaurants() {
  const { t } = useTranslation()

  return (
    <div className="info-page">
      <h2>{t('restaurants.title')}</h2>
      <p>{t('restaurants.description')}</p>
      <a
        href="https://maps.app.goo.gl/JRCThD6EtQabVKqm7?g_st=i"
        target="_blank"
        rel="noopener noreferrer"
        className="info-link"
      >
        {t('restaurants.link')}
      </a>
    </div>
  )
}
