import { CONTENIDO } from '../../config/contenido'
import { useState } from 'react'
import styles from './header.module.css'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded((current) => !current)
  }

  return (
    <header data-site-header className={styles.header}>
      <div className={`${styles.imageHero} ${isExpanded ? styles.imageHeroExpanded : ''}`}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={toggleExpanded}
          aria-label={isExpanded ? CONTENIDO.cabecera.reducir : CONTENIDO.cabecera.ampliar}
          aria-pressed={isExpanded}
        >
          <img
            className={`${styles.image} ${isExpanded ? styles.imageExpanded : ''}`}
            src={CONTENIDO.cabecera.imagen}
            alt={CONTENIDO.cabecera.descripcion}
            loading="eager"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
