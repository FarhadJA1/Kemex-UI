import styles from './About.module.scss'
// import background from './background.jpg'

const AboutMain = () => {
  return (
    <section className={styles.main}>
      <div className={styles.background}>
      </div>
      <div className={styles.content}>
        <div className={styles.title}><a>ABOUT</a></div>
        <h2>Get to know us</h2>
        <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className={styles.line}></div>
      </div>
    </section>
  )
}

export default AboutMain
