import { CONTENIDO } from '../config/contenido'
import { useEffect, useMemo, useState } from 'react'
import { getWhatsAppHref } from '../config/siteConfig'
import styles from './Gallery.module.css'

const IMAGES = CONTENIDO.galeria.imagenes

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedImage = useMemo(
    () => (selectedIndex === null ? null : IMAGES[selectedIndex]),
    [selectedIndex]
  )

  const closeLightbox = () => setSelectedIndex(null)

  const goPrev = () => {
    setSelectedIndex((prev) => (prev === null ? prev : (prev - 1 + IMAGES.length) % IMAGES.length))
  }

  const goNext = () => {
    setSelectedIndex((prev) => (prev === null ? prev : (prev + 1) % IMAGES.length))
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedIndex])

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{CONTENIDO.galeria.etiqueta}</p>
          <h2 className={styles.title}>{CONTENIDO.galeria.titulo}</h2>
        </div>
      </header>

      <div className={styles.grid}>
        {IMAGES.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
            onClick={() => setSelectedIndex(index)}
            aria-label={CONTENIDO.galeria.controles.abrir.replace('{imagen}', image.alt)}
          >
            <img className={styles.image} src={image.src} alt={image.alt} loading="lazy" />
            <span className={styles.caption}>{image.tone}</span>
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <a className={styles.cta} href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">
          {CONTENIDO.galeria.botonContacto}
        </a>
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label={CONTENIDO.galeria.controles.cerrar}
            >
              {'x'}
            </button>

            <button
              type="button"
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goPrev}
              aria-label={CONTENIDO.galeria.controles.anterior}
            >
              {'<'}
            </button>

            <img
              className={styles.modalImage}
              src={selectedImage.src}
              alt={selectedImage.alt}
              loading="eager"
            />

            <button
              type="button"
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goNext}
              aria-label={CONTENIDO.galeria.controles.siguiente}
            >
              {'>'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
