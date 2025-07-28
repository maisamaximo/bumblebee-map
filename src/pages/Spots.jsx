import '../styles/info.css'
import { useTranslation } from 'react-i18next'

export default function Spots() {
  const { t } = useTranslation()

  return (
    <div className="info-page">
      <h2>{t('spots.title')}</h2>
      <p>{t('spots.description')}</p>
      <ul>
        <li>{t('spots.rule1')}</li>
        <li>{t('spots.rule2')}</li>
        <li>{t('spots.rule3')}</li>
        <li>{t('spots.rule4')}</li>
      </ul>
      <a
        href="https://maps.app.goo.gl/dwV83rAVZZNroJFc9?g_st=i"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('spots.link')}
      </a>
    </div>
  )
}
