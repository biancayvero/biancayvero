import { CONTENIDO } from '../../../config/contenido'
import { Link } from 'react-router-dom'
import styles from './AgeGate.module.css'

const AgeGate = ({ onAccept, onReject, status }) => {
  const isDenied = status === 'denied'

  return (
    <div className={styles.backdrop}>
      <section
        className={styles.card}
        aria-labelledby="age-gate-title"
        aria-modal="true"
        role="dialog"
      >
        <p className={styles.eyebrow}>{CONTENIDO.edad.etiqueta}</p>
        <h1 id="age-gate-title" className={styles.title}>
          {CONTENIDO.edad.titulo}
        </h1>

        {isDenied ? (
          <>
            <p className={styles.text}>
              {CONTENIDO.edad.denegado}
            </p>
            <p className={styles.note}>
              {CONTENIDO.edad.notaDenegado}
            </p>
          </>
        ) : (
          <>
            <p className={styles.text}>
              {CONTENIDO.edad.pregunta}
            </p>

            <div className={styles.actions}>
              <button type="button" className={styles.primaryButton} onClick={onAccept}>
                {CONTENIDO.edad.aceptar}
              </button>
              <button type="button" className={styles.secondaryButton} onClick={onReject}>
                {CONTENIDO.edad.rechazar}
              </button>
            </div>
          </>
        )}

        <nav className={styles.links} aria-label={CONTENIDO.edad.etiquetaEnlaces}>
          {CONTENIDO.legal.enlaces.map((enlace) => (
            <Link key={enlace.ruta} className={styles.link} to={enlace.ruta}>
              {enlace.texto}
            </Link>
          ))}
        </nav>
      </section>
    </div>
  )
}

export default AgeGate
