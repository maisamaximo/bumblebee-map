import '../styles/info.css'
import { useTranslation } from 'react-i18next'

export default function Hiking() {
  const { t } = useTranslation()

  return (
    <div className="info-page">
      <h2>{t('hiking.title')}</h2>
      <p>{t('hiking.description1')}</p>
      <p>{t('hiking.description2')}</p>
      <a
        href="https://maps.app.goo.gl/V7wo21vwFTdCrEQ79?g_st=i"
        target="_blank"
        rel="noopener noreferrer"
        className="info-link"
      >
        {t('hiking.link')}
      </a>
    </div>
  )
}
