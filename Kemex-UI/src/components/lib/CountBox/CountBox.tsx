import styles from './CountBox.module.scss'

interface IProps {
  count: number,
  text: string
}

const CountBox = ({count,text}:IProps) => {
  return (
    <div className={styles.countBox}>
        <p className={styles.count}>{count}<span>+</span></p>
        <p className={styles.countText}>{text}</p>
    </div>
  )
}

export default CountBox
