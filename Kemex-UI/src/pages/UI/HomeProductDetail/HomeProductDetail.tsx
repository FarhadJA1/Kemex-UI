import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProductsByCategory } from '@/store/productReducer'
import { truncateText } from '@/utils/helperFunctions'

import PageHero from '@/components/lib/PageHero'
import BreadCrumbs from '@/components/lib/Breadcrumbs'
import { productsData} from '@/pages/UI/Products/data'

import styles from './styles.module.scss'


const HomeProductDetail = () => {
  const { id, productId } = useParams()
  const { data } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  const { t } = useTranslation('productsPage')

  const _product = productsData.find(item => item.id === +productId!)
  const _products = productsData.filter(products => products.category.id === +id!)
  const details = productsData.find(item => item.id === +productId!)?.details

  useEffect(() => {
    dispatch(fetchProductsByCategory(Number(id)))
  }, [id])

  return (
    <section className={styles.product_detail}>
      <PageHero
        title={'Sənaye üçün kimyəvi məmulatlar və xammal'}
        subtitle={'Məhsullarımız'}
        desc={'Kemex International şirkəti hal-hazırda Qafqaz regionunda bazarının lideridir və neft, dağ mədənçiliyi, su təchizatı və qida sənayelərini təmsil edən şirkətlərin çoxu ilə əməkdaşlıq edir.'}
        bgPath={'/hero-slider/slide3.png'} />

      <div className={styles.detail_wrapper}>
        {productId &&
          <>
            <BreadCrumbs label={_product?.name!} thirdPath={id} thirdLabel={data[0]?.name}/>
          </>}
        <div className={styles.detail_content}>
          {/* what is */}
          <div className={styles.content_head}>{details?.whatIs?.head1}</div>
          <div className={styles.content_sub}>{details?.whatIs?.sub1}</div>
          <div className={styles.content_sub}>{details?.whatIs?.sub2}</div>
          {details?.whatIs?.img &&
            <img className={styles.content_img} src={details?.whatIs?.img} alt={details?.whatIs?.head1} />}
          <div className={styles.content_desc}>{details?.whatIs?.sub_desc1}</div>
          <div className={styles.content_desc}>{details?.whatIs?.sub_desc2}</div>
          <div className={styles.content_desc}>{details?.whatIs?.sub_desc3}</div>
          {/* Technical Properties */}
          {details?.technicalProps &&
            <div className={styles.technicalProps}>
              <div className={styles.content_subhead}>{details?.technicalProps?.head}</div>
              {
                details?.technicalProps.props.map((item, i) => {
                  return (
                    <div className={styles.content_desc} key={i}>{item.desc}</div>
                  )
                })
              }
            </div>
          }
          {/* produce */}
          <div className={styles.produce}>
            <div className={styles.content_subhead}>{details?.produce?.head1}</div>
            <div className={styles.content_subhead2}>{details?.produce?.subHead1}</div>
            <div className={styles.content_desc}>{details?.produce?.desc1}</div>
            <div className={styles.content_desc}>{details?.produce?.desc2}</div>
            <div className={styles.content_desc}>{details?.produce?.desc3}</div>
            <div className={styles.content_desc}>{details?.produce?.desc4}</div>
            <div className={styles.content_desc}>{details?.produce?.desc5}</div>
            <div className={styles.content_desc}>{details?.produce?.desc6}</div>
            <div className={styles.content_desc}>{details?.produce?.desc7}</div>
            <div className={styles.content_desc}>{details?.produce?.desc8}</div>
            <div className={styles.content_desc}>{details?.produce?.desc9}</div>
            <div className={styles.content_desc}>{details?.produce?.desc10}</div>
            <div className={styles.content_subhead2}>{details?.produce?.subHead2}</div>
            <div className={styles.content_desc}>{details?.produce?.desc11}</div>
            <div className={styles.content_desc}>{details?.produce?.desc12}</div>
            <div className={styles.content_desc}>{details?.produce?.desc13}</div>
            <div className={styles.content_desc}>{details?.produce?.desc14}</div>
            <div className={styles.content_desc}>{details?.produce?.desc15}</div>
            <div className={styles.content_desc}>{details?.produce?.desc16}</div>
            <div className={styles.content_desc}>{details?.produce?.desc17}</div>
            <div className={styles.content_subhead2}>{details?.produce?.subHead3}</div>
            <div className={styles.content_desc}>{details?.produce?.subHead3_des1}</div>
            <div className={styles.content_subhead2}>{details?.produce?.subHead4}</div>
            <div className={styles.content_desc}>{details?.produce?.subHead4_des1}</div>
          </div>
          {/* distribute */}
          <div className={styles.distribute}>
            <div className={styles.content_subhead}>{details?.distribute?.head1}</div>
            <div className={styles.content_subhead2}>{details?.distribute?.subHead1}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc1}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc2}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc3}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc3_1}</div>
            <div className={styles.content_subhead2}>{details?.distribute?.subHead2}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc4}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc5}</div>
            <div className={styles.content_desc}>{details?.distribute?.subHead2_desc1}</div>
            {<div className={styles.content_subhead2}>{details?.distribute?.subHead3}</div>}
            <div className={styles.content_desc}>{details?.distribute?.desc6}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc7}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc8}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc9}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc10}</div>
            <div className={styles.content_desc}>{details?.distribute?.desc11}</div>
          </div>
          {/* used */}
          <div className={styles.used}>
          <div className={styles.content_subhead}>{details?.used?.head1}</div>
          <div className={styles.content_subhead2}>{details?.used?.subHead1}</div>
          <div className={styles.content_desc}>{details?.used?.desc1}</div>
          <div className={styles.content_desc}>{details?.used?.desc1_2}</div>
          <div className={styles.content_desc}>{details?.used?.desc1_3}</div>
          <div className={styles.content_subhead2}>{details?.used?.subHead2}</div>
          <div className={styles.content_desc}>{details?.used?.desc2}</div>
          <div className={styles.content_desc}>{details?.used?.desc2_2}</div>
          <div className={styles.content_desc}>{details?.used?.desc2_3}</div>
          <div className={styles.content_subhead2}>{details?.used?.subHead3}</div>
          <div className={styles.content_desc}>{details?.used?.desc3}</div>
          <div className={styles.content_subhead2}>{details?.used?.subHead4}</div>
          <div className={styles.content_desc}>{details?.used?.desc4}</div>
          <div className={styles.content_desc}>{details?.used?.desc5}</div>
          <div className={styles.content_subhead2}>{details?.used?.subHead5}</div>
          <div className={styles.content_desc}>{details?.used?.desc6}</div>
          <div className={styles.content_desc}>{details?.used?.desc7}</div>
          <div className={styles.content_desc}>{details?.used?.desc8}</div>
          <div className={styles.content_desc}>{details?.used?.desc9}</div>
          <div className={styles.content_desc}>{details?.used?.desc10}</div>
          <div className={styles.content_subhead2}>{details?.used?.subHead6}</div>
          <div className={styles.content_desc}>{details?.used?.desc11}</div>
          <div className={styles.content_desc}>{details?.used?.desc12}</div>
          </div>
        </div>
        <div className={styles.products_list}>
          {
            _products?.map((product) => {
              return (
                <div key={product.id} className={`${styles.list_item} ${product.id === +productId! && styles.active}`}>
                  <p className={styles.item_title}>{product.name}</p>
                  <p className={styles.item_subtitle}>{truncateText(product?.details?.whatIs.sub1!)}</p>
                  <Link to={`/products/${id}/${product.id}`}>
                    <button className={styles.itemBtn}>{t('button')}</button>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HomeProductDetail
