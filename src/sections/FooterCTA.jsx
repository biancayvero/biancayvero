import { CONTENIDO } from '../config/contenido'
import { getWhatsAppHref } from '../config/siteConfig'
import styles from './FooterCTA.module.css'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{CONTENIDO.contactoFinal.titulo}</h2>
      <p className={styles.subtitle}>{CONTENIDO.contactoFinal.parrafo}</p>

      <a className={styles.cta} href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">
        {CONTENIDO.contactoFinal.boton}
      </a>
    </section>
  )
}

export default FooterCTA
