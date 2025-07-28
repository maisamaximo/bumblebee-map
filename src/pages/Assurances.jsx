import '../styles/assurances.css'
import { useTranslation } from 'react-i18next'

export default function Assurances() {
  const { t } = useTranslation()

  return (
    <div className="assurances">
      <h1 className="title-orange">Drive Safe Packages – Choose Your Level of Protection</h1>
      <p className="intro">
        Every rental includes the BASIC PLAN, but for a smoother and safer experience, especially on an island with narrow roads and remote areas, most travelers choose one of the optional upgrades.
        All extras are payable on-site (cash or card) when the van is handed over.
      </p>

      <hr className="separator" />

      <div className="plan basic">
        <div className="label">🟡 BASIC PLAN – Already Included</div>
        <ul>
          <li>💶 Cost: €0 / day</li>
          <li>🔒 Security Deposit: €1000</li>
          <li>💥 Deductible: €1000</li>
        </ul>
        <p className="coverage-title">🛡️ Covers:</p>
        <ul>
          <li>✅ Third-party liability only</li>
          <li>❌ No coverage for damage to the van, windows, tires</li>
          <li>❌ No roadside assistance</li>
          <li>❌ No second driver</li>
        </ul>
        <p className="note">A minimal legal coverage – any damage or assistance will be at your own risk.</p>
      </div>

      <hr className="separator" />

      <div className="plan comfort">
        <div className="label">🔵 COMFORT PLAN – €19.90 / day</div>
        <ul>
          <li>💶 Cost: €19.90 / day</li>
          <li>🔒 Security Deposit: €750</li>
        </ul>
        <p className="coverage-title">💥 Deductibles:</p>
        <ul>
          <li>* Glass breakage: €150</li>
          <li>* Tire damage: €50</li>
          <li>* Roadside assistance: €0</li>
        </ul>
        <p className="coverage-title">🛡️ Covers:</p>
        <ul>
          <li>✅ Glass breakage</li>
          <li>✅ Tires</li>
          <li>✅ 24/7 roadside assistance</li>
          <li>✅ Third-party liability</li>
        </ul>
        <p className="note">Perfect for those who want peace of mind without breaking the bank — this plan covers the most frequent issues on the road.</p>
      </div>

      <hr className="separator" />

      <div className="plan serenity">
        <div className="label">🟣 FULL-SERENITY PLAN – €29.90 / day</div>
        <ul>
          <li>💶 Cost: €29.90 / day</li>
          <li>🔒 Security Deposit: €500</li>
        </ul>
        <p className="coverage-title">💥 Deductibles:</p>
        <ul>
          <li>* Vehicle damage: €750</li>
          <li>* Windows and tires: €0</li>
          <li>* Natural disaster: €250</li>
          <li>* Roadside assistance: €0</li>
        </ul>
        <p className="coverage-title">🛡️ Covers:</p>
        <ul>
          <li>✅ Vehicle damage (inside & outside)</li>
          <li>✅ Glass breakage</li>
          <li>✅ Tires</li>
          <li>✅ Natural disasters</li>
          <li>✅ 24/7 travel assistance</li>
          <li>✅ Second driver</li>
          <li>✅ Third-party liability</li>
        </ul>
        <p className="note">The most comprehensive plan – ideal for those who want to drive fully covered with no financial surprises, even in the worst-case scenario.</p>
      </div>

      <hr className="separator" />

      <p className="note">
        📍 Note: The insurance plan is selected on the day of departure, during key handover and contract signature.
      </p>

      <p className="note">
        ✈️ And don’t forget: I also offer airport pickup and drop-off for €25 each way. Just send me your flight times so I can organize it properly.
      </p>
    </div>
  )
}
