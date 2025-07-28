import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/photos.css'

// Import das imagens
import photo1 from '../assets/photos/photo1.jpg'
import photo2 from '../assets/photos/photo2.jpg'
import photo3 from '../assets/photos/photo3.jpg'
import photo4 from '../assets/photos/photo4.jpg'
import photo7 from '../assets/photos/photo7.jpg'
import photo8 from '../assets/photos/photo8.jpg'
import photo9 from '../assets/photos/photo9.jpg'

export default function Photos () {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const photoData = [
    { src: photo1, captionKey: 'photos.caption1' },
    { src: photo2, captionKey: 'photos.caption2' },
    { src: photo3, captionKey: 'photos.caption3' },
    { src: photo4, captionKey: 'photos.caption4' },
    { src: photo7, captionKey: 'photos.caption5' },
    { src: photo8, captionKey: 'photos.caption6' },
    { src: photo9, captionKey: 'photos.caption7' }
  ]

  const openLightbox = i => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => setIndex((index + 1) % photoData.length)
  const prev = () => setIndex((index - 1 + photoData.length) % photoData.length)

  return (
    <>
      <div className='photos-page'>
        <h2>{t('photos.title')}</h2>

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
