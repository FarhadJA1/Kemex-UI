import styles from './styles.module.scss'

const SpinnerKemex = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerLogo}>
        <div className={styles.spinnerTitle}>Kemex</div>
        <div className={styles.spinnerSubtitle}>international</div>
      </div>
      <ul className={styles.spinnerUl}>
        <li className={styles.spinnerLi}></li>
        <li className={styles.spinnerLi}></li>
        <li className={styles.spinnerLi}></li>
      </ul>
    </div>
  )
}

export default SpinnerKemex
