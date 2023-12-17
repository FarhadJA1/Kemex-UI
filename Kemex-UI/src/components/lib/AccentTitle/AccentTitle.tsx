import styles from './Accenttitle.module.scss'
import DotCircle from '@/components/lib/icons/DotCircle'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  color?: string
}

const AccentTitle = ({children, color='#4876a2'}:IProps) => {
  return (

      <p style={{color:color}} className={styles.subtitle}>
        <DotCircle color={color}/>
        {children}
      </p>

  )
}

export default AccentTitle
