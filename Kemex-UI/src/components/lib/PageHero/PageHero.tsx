import styles from './PageHero.module.scss'

interface IProps {
  title: string
  subtitle: string
  desc: string
  bgPath: string
}

const PageHero = ({desc,bgPath,title, subtitle}:IProps) => {
  return (
    <section className={styles.main} style={{backgroundImage:`url(${bgPath})`}} >
      <div className={styles.background} >
      </div>
      <div className={styles.content} data-aos="fade-right" data-aos-duration="1000">
        <div className={styles.title}>{subtitle}</div>
        <h2>{title}</h2>
        <p className={styles.description}>{desc}</p>
        <div className={styles.line}></div>
      </div>
    </section>
  )
}

export default PageHero
