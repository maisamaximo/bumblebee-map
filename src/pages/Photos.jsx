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

// Dados das fotos com descrições divertidas estilo "Polaroid escrita à mão"
const photoData = [
  { src: photo1, caption: 'Chill time in the van' },
  { src: photo2, caption: 'Best memories with friends' },
  { src: photo3, caption: 'Say cheese! 🐮' },
  { src: photo4, caption: 'Let’s kayak this island!' },
  { src: photo7, caption: 'Bumblebee shining 💛' },
  { src: photo8, caption: 'Silent mornings, stunning views' },
  { src: photo9, caption: 'Coffee with a view ☕🌄' }
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
              <img src={p.src} alt={p.caption} />
              <span>{p.caption}</span>
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
            alt={photoData[index].caption}
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
