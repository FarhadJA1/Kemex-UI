import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Rodal from 'rodal'
import { PhoneInput } from 'react-international-phone'
import { z } from 'zod'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Tooltip } from 'react-tooltip'

import { calcScroll } from '@/constants/scroll'
import { countries, isPhoneValid } from '@/constants/countries'
import { IOrder } from '@/store/types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { askForPrice, fetchProductsByCategory } from '@/store/productReducer'

import PageHero from '@/components/lib/PageHero'
import BreadCrumbs from '@/components/lib/Breadcrumbs'
import DownloadIcon from '@/components/lib/icons/DownloadIcon'
import Button from '@/components/lib/Button'
import NoData from '@/components/lib/NoData'
import SpinnerDot from '@/components/lib/SpinnerDot'

import styles from './CategoryProduct.module.scss'


const CategoryProduct = () => {
  const {id} = useParams()
  const [showForm, setShowForm] = useState(false)
  const [product, setProduct] = useState<any>({  })

  const {products, data, loading} = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  const {t} = useTranslation('productsPage')

  const productOrderSchema = z.object({
    name: z.string({ required_error: `${t('form-validation')}` }),
    surname: z.string({ required_error: `${t('form-validation')}` }),
    email: z.string({ required_error: `${t('form-validation')}` }).email(`${t('email-validation')}`),
    phoneNumber: z
      .string({ required_error: `${t('form-validation')}` })
      .refine((value) => isPhoneValid(value), {
        message: `${t('phone-validation')}`,
      }),
    description: z.string({ required_error: `${t('form-validation')}` }),
  })

  const onSubmit = async (data: IOrder) => {
    const newData = {...data, productId: product.id}
    formik.setValues(() => ({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '+994 ',
      description: '',
    }))
    await dispatch(askForPrice(newData))
    setShowForm(false)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      description: '',
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(productOrderSchema),
  })

  const  openFormModal = (item:any) =>{
    setShowForm(true)
    setProduct(item)
    formik.setValues(() => ({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '+994 ',
      description: '',
    }))
  }

  const  closeFormModal = ()=>{
    formik.setErrors({})
    setShowForm(false)
  }


  useEffect(() =>{
    dispatch(fetchProductsByCategory(Number(id)))
  },[id])

  useEffect(()=>{
    const scrollWidth = calcScroll()
    if(showForm){
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight = `${scrollWidth}px`;
    }else {
      document.body.style.overflow = ''
      document.body.style.marginRight = `0px`;
    }
  },[showForm])
  

  return (
    <section className={styles.product}>
     <div className={styles.productInner}>
       <PageHero
         title={'Sənaye üçün kimyəvi məmulatlar və xammal'}
         subtitle={'Məhsullarımız'}
         desc={'Kemex International şirkəti hal-hazırda Qafqaz regionunda bazarının lideridir və neft, dağ mədənçiliyi, su təchizatı və qida sənayelərini təmsil edən şirkətlərin çoxu ilə əməkdaşlıq edir.'}
         bgPath={'/hero-slider/slide3.png'} />
       <div
         className={styles.productTableWrapper}
         data-aos="zoom-in-up"
         data-aos-duration="1000"
       >
         {id &&
         <>
           <BreadCrumbs label={data[0]?.name}/>
         </>}
         <table
           className={styles.productTable}
         >
           <thead>
           <tr>
             <th>№</th>
             <th>Product Name</th>
             <th>Info</th>
             <th></th>
           </tr>
           </thead>
           <tbody>
           {products.length === 0 && <tr>
             <td colSpan={2}>
               <NoData/>
             </td>
           </tr>}
           {products.map((item,i) =>{
             return (
                <tr key={item.id}> 
                       <td className={`${styles.productCol} ${styles.colNum}`}>{i+1}</td>
                       <td className={`${styles.productCol} ${styles.colName}`}>{item.name}</td>
                       <td className={`${styles.productCol} ${styles.colInfo}`}>
                         <Link to={`/products/${id}/${item.id}`}>
                           <button className={styles.colBtn}>{t('button')}</button>
                         </Link>
                       </td>
                       <td className={`${styles.productCol} ${styles.colAct}`}>
                       <button
                     id={'order'}
                     className={styles.iconWrap}
                     onClick={() =>openFormModal(item)}
                     data-tooltip-delay-show={300}
                   >
                     <DownloadIcon/>
                   </button>
                   <Tooltip anchorSelect="#order" place="top"  style={{borderRadius: '5px', background: '#111f33',color:'#fff'}}>
                     {t('order')}
                   </Tooltip>
                       </td>
               </tr>
              ) 
           })} 
           </tbody>
         </table>
       </div>
     </div>
      <div id={'product'}>
        <Rodal
          visible={showForm}
          onClose={closeFormModal}
          width={650}
          height={630}
          animation={'slideDown'}
          customStyles={{  minWidth: '300px', padding:'20px 30px 0', overflowY: 'scroll'}}
        >
          <h2 className={styles.contact_form_title}>{t('form-headerLabel')} : {product.name}</h2>


          <form className={styles.form}
                onSubmit={formik.handleSubmit}
          >
            <div className={styles.form_section}>
              <div className={styles.form_group}>
                <label>
                  {t('form-name')}
                  <span>*</span>
                </label>
                <input
                  type='text'
                  placeholder={`${t('form-placeholder')}`}
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  disabled={loading}
                />
                {formik.errors.name && (
                  <div className={styles.formFieldError}>{formik.errors.name}</div>
                )}
              </div>
              <div className={styles.form_group}>
                <label>
                  {t('form-surname')}
                  <span>*</span>
                </label>
                <input
                  type='text'
                  placeholder={`${t('form-placeholder')}`}
                  name='surname'
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  disabled={loading}
                />
                {formik.errors.surname && (
                  <div className={styles.formFieldError}>{formik.errors.surname}</div>
                )}
              </div>
            </div>
            <div className={styles.form_section}>
              <div className={styles.form_group}>
                <label>
                  {t('form-mail')}
                  <span>*</span>
                </label>
                <input
                  type='text'
                  placeholder={`${t('form-placeholder')}`}
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  disabled={loading}
                />
                {formik.errors.email && (
                  <div className={styles.formFieldError}>{formik.errors.email}</div>
                )}
              </div>
              <div
                className={styles.form_group}
                id={'phone'}
              >
                <label>
                  {t('form-mobile')}
                  <span>*</span>
                </label>
                <div style={{background:'#F1F6FB'}}>
                  <PhoneInput
                    defaultCountry='az'
                    countries={countries}
                    inputStyle={{background:'#F1F6FB', border:'none'}}
                    value={formik.values.phoneNumber}
                    onChange={(phoneNumber) => formik.setFieldValue('phoneNumber', phoneNumber)}
                    disabled={loading}
                  />
                </div>
                {formik.errors.phoneNumber && (
                  <div className={styles.formFieldError}>{formik.errors.phoneNumber}</div>
                )}
              </div>
            </div>
            <h2 className={styles.form_text_title}>{t('form-footerLabel')}</h2>
            <div className={styles.form_group_desc}>
              <label className={styles.form_group_desc_label}>
                {t('form-comments')}
                <span>*</span>
              </label>
              <textarea className={styles.form_text_desc}
                        rows={8} placeholder={`${t('form-placeholder')}`}
                        style={{ width: '100%' }}
                        name='description'
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        disabled={loading}
              ></textarea>
              {formik.errors.description && (
                <div className={styles.formFieldError}>{formik.errors.description}</div>
              )}
            </div>
            <Button type={'submit'}>{loading ? <SpinnerDot/> : `${t('form-button')}`}</Button>
          </form>
        </Rodal>
      </div>

    </section>
  )
}

export default CategoryProduct
