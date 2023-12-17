import styles from './Breadcrumbs.module.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks.ts'

interface IProps {
  headPath?: string
  secondPath?: string
  label: string
  secondLabel?:string
  thirdLabel?:string
  thirdPath?:string
}
const BreadCrumbs = ({label,headPath='/', secondPath='/products', secondLabel='Product', thirdPath, thirdLabel}:IProps) => {
  const {dataLoading} = useAppSelector(state =>state.products)
  return (
    <ul className={styles.breadcrumbs}>
      <li><Link to={headPath}  className={`${styles.breadcrumbs__pointer} ${styles.breadcrumbs__pointer__first}`}>
        <span>Home</span></Link>
      </li>
      <li><Link to={secondPath} className={styles.breadcrumbs__pointer}>
          <span>{secondLabel}</span>
        </Link>
        </li>
      {
        thirdPath &&
        <li><Link to={`/products/${thirdPath}`}  className={styles.breadcrumbs__pointer}>
          <span>{thirdLabel}</span>
        </Link>
        </li>
      }
      {
        dataLoading ?
          <li>
            <p  className={`${styles.breadcrumbs__pointer} ${styles.breadcrumbs__pointer__last} ${styles.breadcrumbs__pointer__current}`}>&middot; &middot; &middot;</p>
          </li>
          :
          <li><p className={`${styles.breadcrumbs__pointer} ${styles.breadcrumbs__pointer__last} ${styles.breadcrumbs__pointer__current}`}>
            <span>{label}</span></p></li>
      }
    </ul>
  )
}

export default BreadCrumbs
