import { CONTENIDO } from '../config/contenido'
import styles from './FAQ.module.css'

const FAQ_ITEMS = CONTENIDO.preguntas.items

const FAQ = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{CONTENIDO.preguntas.titulo}</h2>

      <div className={styles.list}>
        {FAQ_ITEMS.map((item, index) => (
          <details key={index} className={styles.item}>
            <summary className={styles.summary}>
              <span className={styles.question}>{item.q}</span>
              <span className={styles.icon} aria-hidden="true">
                +
              </span>
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
