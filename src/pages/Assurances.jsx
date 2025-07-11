import '../styles/assurances.css'
import { useTranslation } from 'react-i18next'

export default function Assurances() {
  const { t } = useTranslation()

  return (
    <div className="assurances">
      <h1 className="title-orange">{t('insuranceTitle')}</h1>
      <h2 className="subtitle-yellow">{t('insuranceSubtitle')}</h2>
      <p className="intro">{t('insuranceIntro1')}</p>
      <p className="intro">{t('insuranceIntro2')}</p>

      <div className="plan basic">
        <div className="label">BASIC</div>
        <h3>{t('basicTitle')}</h3>
        <ul>
          <li>{t('basicPrice')}</li>
          <li>{t('basicDeposit')}</li>
          <li>{t('basicDeductible')}</li>
          <li>❌ {t('basicCoverage')}</li>
        </ul>
        <p className="not-covered">✅ {t('basicNotCovered')}</p>
      </div>

      <div className="plan comfort">
        <div className="label">CONFORT</div>
        <h3>{t('comfortTitle')}</h3>
        <ul>
          <li>{t('comfortDeposit')}</li>
          <li>{t('comfortDeductible')}</li>
          <li>• {t('comfortDamage')}</li>
          <li>• {t('comfortRoadside')}</li>
          <li>• {t('comfortGlass')}</li>
        </ul>
        <p className="covered">✅ {t('comfortCovered')}</p>
      </div>

      <div className="plan serenity">
        <div className="label">SÉRÉNITÉ TOTALE</div>
        <h3>{t('serenityTitle')}</h3>
        <ul>
          <li>{t('serenityDeposit')}</li>
          <li>{t('serenityCoverage')}</li>
          <li>✅ {t('serenityDamage')}</li>
          <li>✅ {t('serenityDriver')}</li>
          <li>✅ {t('serenityTires')}</li>
          <li>✅ {t('serenityAssist')}</li>
        </ul>
      </div>
    </div>
  )
}
