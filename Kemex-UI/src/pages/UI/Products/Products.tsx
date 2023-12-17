import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchCategory, fetchIndustrialChemical } from '@/store/productReducer'
import { icons } from '@/pages/UI/Products/data'
import PageHero from '@/components/lib/PageHero'

import styles from './Products.module.scss'

const Products = () => {
  const { categories } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  const { t } = useTranslation('productsPage');

  useEffect(() => {
    dispatch(fetchCategory())
    dispatch(fetchIndustrialChemical())
  }, [])

  return (
    <section className={styles.productsWrapper}>
      <div className={styles.productsInner}>
        <PageHero
          title={`${t('label')}`}
          subtitle={`${t('products')}`}
          desc={`${t('description')}`}
          bgPath={'/hero-slider/slide3.png'} />
        <div className={styles.products}>
          {categories?.map((product, i) => {
            return <Link to={`${product.id}`} key={product.id} className={styles.productItem} data-aos='fade-up'
              data-aos-duration='1000'>
              <div className={styles.productItemIcon}>{i <= 11 ? icons[i].icon : icons[11].icon}</div>
              <img className={styles.productItemImg} src={i <= 11 ? icons[i].img : icons[11].img} alt='img' />
              <p className={styles.productItemTitle}>{product.name}</p>
              <span className={styles.productItemSubtitle}>{t('button')}</span>
            </Link>
          })}
        </div>
      </div>
    </section>
  )
}
export default Products
