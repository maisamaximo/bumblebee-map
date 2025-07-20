import { useLocation } from 'react-router-dom'
import { useState, useMemo } from 'react'
import Modal from 'react-modal'
import './activity-gallery.css'

const allImages = import.meta.glob('../assets/photos/*/*.jpg', { eager: true, import: 'default' })

export default function ActivityGallery() {
  const location = useLocation()
  const activity = location.pathname.split('/')[1] // Ex: "dolphins", "canyoning", etc.

  const currentImages = useMemo(() => {
    return Object.entries(allImages)
      .filter(([path]) => path.includes(`/photos/${activity}/`))
      .map(([, src]) => src)
  }, [activity])

  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length)
  }

  return (
    <div className="gallery-page">
      <h2>{activity.charAt(0).toUpperCase() + activity.slice(1)} Gallery</h2>

      <div className="gallery-grid">
        {currentImages.map((img, i) => (
          <div key={i} className="gallery-card bordered" onClick={() => openModal(i)}>
            <img src={img} alt={`Activity ${i}`} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="gallery-modal"
        overlayClassName="gallery-overlay"
        contentLabel="Photo Viewer"
        ariaHideApp={false}
      >
        <div className="modal-content">
        <button onClick={closeModal} className="close-button">×</button>
        <button onClick={prevImage} className="nav-button left">‹</button>
        <div className="modal-frame">
            <img src={currentImages[currentIndex]} alt="Full" className="modal-img" />
        </div>
        <button onClick={nextImage} className="nav-button right">›</button>
        </div>
      </Modal>
    </div>
  )
}
