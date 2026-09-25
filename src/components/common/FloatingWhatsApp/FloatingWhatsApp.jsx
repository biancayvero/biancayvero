import { CONTENIDO } from '../../../config/contenido'
import { getWhatsAppHref } from '../../../config/siteConfig'
import styles from './FloatingWhatsApp.module.css'

const FloatingWhatsApp = () => {
  return (
    <a
      className={styles.floating}
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CONTENIDO.whatsapp.descripcionFlotante}
    >
      <img className={styles.icon} src={CONTENIDO.whatsapp.icono} alt="" aria-hidden="true" />
      <span className={styles.label}>{CONTENIDO.whatsapp.textoFlotante}</span>
    </a>
  )
}

export default FloatingWhatsApp
