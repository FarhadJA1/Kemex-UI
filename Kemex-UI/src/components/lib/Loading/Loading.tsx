import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.rect1}></div>
      <div className={styles.rect2} ></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
    </div>
  )
}

export default Loading
