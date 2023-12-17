import styles from './Spinner.module.scss'
import { CSSProperties } from 'react'

const Spinner = () => {
  const letters = ['K', 'E', 'M', 'E', 'X'];
  return (
    <section className={styles.spinner}>
      <div className={styles.waviy}>
        {letters.map((letter, index) => (
          <span key={index} style={{ '--i': index + 1 } as CSSProperties}>{letter}</span>
        ))}
      </div>
    </section>
  )
}

export default Spinner
