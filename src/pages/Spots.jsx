import '../styles/info.css'

export default function Spots () {
  return (
    <div className="info-page">
      <h2>🌄 Safe Spots to Stay</h2>
      <p>
        Madeira has breathtaking spots, but not all are suitable for overnight stays.
        To sleep in peace and respect nature, we selected a few safe places where you’re welcome to park and rest.
      </p>
      <ul>
        <li>🚫 No campfires unless explicitly allowed</li>
        <li>🧼 Always leave the place cleaner than you found</li>
        <li>🚿 Respect privacy and don’t shower in public</li>
        <li>🧘🏽 Use common sense and enjoy the island consciously</li>
      </ul>
      <a
        href="https://maps.app.goo.gl/dwV83rAVZZNroJFc9?g_st=i"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Safe Spots 🗺️
      </a>
    </div>
  )
}
