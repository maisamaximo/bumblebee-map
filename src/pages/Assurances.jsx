import '../styles/assurances.css'
import { useTranslation } from 'react-i18next'

export default function Assurances() {
  const { t } = useTranslation()

  return (
    <div className="assurances">
      <h1 className="title-orange">{t('assurances.title')}</h1>
      <p className="intro">{t('assurances.intro')}</p>

      <hr className="separator" />

      <div className="plan basic">
        <div className="label">{t('assurances.basic.label')}</div>
        <ul>
          <li>{t('assurances.basic.cost')}</li>
          <li>{t('assurances.basic.deposit')}</li>
          <li>{t('assurances.basic.deductible')}</li>
        </ul>
        <p className="coverage-title">{t('assurances.coversTitle')}</p>
        <ul>
          <li>{t('assurances.basic.cover1')}</li>
          <li>{t('assurances.basic.cover2')}</li>
          <li>{t('assurances.basic.cover3')}</li>
          <li>{t('assurances.basic.cover4')}</li>
        </ul>
        <p className="note">{t('assurances.basic.note')}</p>
      </div>

      <hr className="separator" />

      <div className="plan comfort">
        <div className="label">{t('assurances.comfort.label')}</div>
        <ul>
          <li>{t('assurances.comfort.cost')}</li>
          <li>{t('assurances.comfort.deposit')}</li>
        </ul>
        <p className="coverage-title">{t('assurances.deductiblesTitle')}</p>
        <ul>
          <li>{t('assurances.comfort.deductible1')}</li>
          <li>{t('assurances.comfort.deductible2')}</li>
          <li>{t('assurances.comfort.deductible3')}</li>
          <li>{t('assurances.comfort.deductible4')}</li>
        </ul>
        <p className="coverage-title">{t('assurances.coversTitle')}</p>
        <ul>
          <li>{t('assurances.comfort.cover1')}</li>
          <li>{t('assurances.comfort.cover2')}</li>
          <li>{t('assurances.comfort.cover3')}</li>
          <li>{t('assurances.comfort.cover4')}</li>
          <li>{t('assurances.comfort.cover5')}</li>
        </ul>
        <p className="note">{t('assurances.comfort.note')}</p>
      </div>

      <hr className="separator" />

      <div className="plan serenity">
        <div className="label">{t('assurances.serenity.label')}</div>
        <ul>
          <li>{t('assurances.serenity.cost')}</li>
          <li>{t('assurances.serenity.deposit')}</li>
        </ul>
        <p className="coverage-title">{t('assurances.deductiblesTitle')}</p>
        <ul>
          <li>{t('assurances.serenity.deductible1')}</li>
          <li>{t('assurances.serenity.deductible2')}</li>
          <li>{t('assurances.serenity.deductible3')}</li>
          <li>{t('assurances.serenity.deductible4')}</li>
        </ul>
        <p className="coverage-title">{t('assurances.coversTitle')}</p>
        <ul>
          <li>{t('assurances.serenity.cover1')}</li>
          <li>{t('assurances.serenity.cover2')}</li>
          <li>{t('assurances.serenity.cover3')}</li>
          <li>{t('assurances.serenity.cover4')}</li>
          <li>{t('assurances.serenity.cover5')}</li>
          <li>{t('assurances.serenity.cover6')}</li>
          <li>{t('assurances.serenity.cover7')}</li>
        </ul>
        <p className="note">{t('assurances.serenity.note')}</p>
      </div>

      <hr className="separator" />

      <p className="note">{t('assurances.finalNote')}</p>
      <p className="note">{t('assurances.airportNote')}</p>
    </div>
  )
}
