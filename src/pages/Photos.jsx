import { useState } from 'react'
import '../styles/photos.css'
import { useTranslation } from 'react-i18next'

// Import das imagens
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'

// Dados das fotos
const photoData = [
  { src: photo1, captionKey: 'photoDescription1' },
  { src: photo2, captionKey: 'photoDescription2' },
  { src: photo3, captionKey: 'photoDescription3' },
  { src: photo4, captionKey: 'photoDescription4' }
]

export default function Photos () {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openLightbox = i => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => setIndex((index + 1) % photoData.length)
  const prev = () =>
    setIndex((index - 1 + photoData.length) % photoData.length)

  return (
    <>
      <div className='photos-page'>
        <h2>{t('photosTitle')}</h2>

        <div className='photo-grid'>
          {photoData.map((p, i) => (
            <div key={i} className='polaroid' onClick={() => openLightbox(i)}>
              <img src={p.src} alt={t(p.captionKey)} />
              <span>{t(p.captionKey)}</span>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className='lightbox' onClick={() => setOpen(false)}>
          <button
            className='arrow left'
            onClick={e => {
              e.stopPropagation()
              prev()
            }}
          >
            ‹
          </button>

          <img
            src={photoData[index].src}
            alt={t(photoData[index].captionKey)}
            className='lightbox-img'
          />

          <button
            className='arrow right'
            onClick={e => {
              e.stopPropagation()
              next()
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
