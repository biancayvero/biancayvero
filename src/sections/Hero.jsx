import { CONTENIDO } from '../config/contenido'
import { getWhatsAppHref } from '../config/siteConfig'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>{CONTENIDO.presentacion.saludo}</p>
        <h1 className={styles.title}>{CONTENIDO.presentacion.titulo}</h1>
        {CONTENIDO.presentacion.parrafos.map((parrafo, index) => (
          <p key={index} className={styles.subtitle}>{parrafo}</p>
        ))}

        <div className={styles.actions}>
          <a
            className={`${styles.button} ${styles.primary}`}
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTENIDO.presentacion.botonContacto}
          </a>

          <a className={`${styles.button} ${styles.secondary}`} href="#editorial">
            {CONTENIDO.presentacion.botonGaleria}
          </a>
        </div>

        <div className={styles.metrics}>
          {CONTENIDO.presentacion.tarjetas.map((tarjeta, index) => (
            <article key={index} className={styles.metricCard}>
              <span className={styles.metricLabel}>{tarjeta.etiqueta}</span>
              <strong className={styles.metricValue}>{tarjeta.texto}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
