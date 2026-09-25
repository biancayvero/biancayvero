import { CONTENIDO } from '../../../config/contenido'
import { Link } from 'react-router-dom'
import styles from './SiteFooter.module.css'

const SiteFooter = () => {
  return (
    <div className={styles.inner}>
      <p className={styles.copy}>{CONTENIDO.pie.texto}</p>

      <nav className={styles.links} aria-label={CONTENIDO.pie.etiquetaEnlaces}>
        {CONTENIDO.legal.enlaces.map((enlace) => (
          <Link key={enlace.ruta} className={styles.link} to={enlace.ruta}>
            {enlace.texto}
          </Link>
        ))}
      </nav>

      <p className={styles.meta}>
        {CONTENIDO.pie.nombre} · {CONTENIDO.pie.ciudad}
      </p>
    </div>
  )
}

export default SiteFooter
