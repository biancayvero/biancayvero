import { Link } from 'react-router-dom'
import { CONTENIDO } from '../../config/contenido'
import styles from './LegalLayout.module.css'

const LegalLayout = ({ pagina }) => (
  <section className={styles.page}>
    <Link className={styles.backLink} to="/">{CONTENIDO.legal.volver}</Link>
    <header className={styles.header}>
      <p className={styles.eyebrow}>{CONTENIDO.legal.etiqueta}</p>
      <h1 className={styles.title}>{pagina.titulo}</h1>
      <p className={styles.updated}>
        {CONTENIDO.legal.etiquetaActualizacion} {CONTENIDO.legal.actualizacion}
      </p>
    </header>
    <div className={styles.content}>
      {pagina.secciones.map((seccion, index) => (
        <section key={index}>
          <h2>{seccion.titulo}</h2>
          {seccion.parrafos.map((parrafo, paragraphIndex) => <p key={paragraphIndex}>{parrafo}</p>)}
        </section>
      ))}
    </div>
  </section>
)

export default LegalLayout
