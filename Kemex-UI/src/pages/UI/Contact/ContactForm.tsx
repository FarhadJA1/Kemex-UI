import styles from './contact.module.scss'
import AccentTitle from '@/components/lib/AccentTitle/AccentTitle'
import Button from '@/components/lib/Button/Button'
import FacebookIcon from '@/components/lib/icons/FacebookIcon/FacebookIcon'
import MailBulk from '@/components/lib/icons/MailBulkIcon/MailBulkIcon'
import WhatsAppIcon from '@/components/lib/icons/WhatsappIcon/WhatsApp'
import MapIcon from '@/components/lib/icons/MapIcon'
import PhoneIcon from '@/components/lib/icons/PhoneIcon'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { z } from 'zod'
import { IOrder } from '@/store/types.ts'
import { sendOrder } from '@/store/productReducer.ts'
import { useTranslation } from 'react-i18next'
import { PhoneInput } from 'react-international-phone'
import TelegramIcon from '@/components/lib/icons/TelegramIcon'
import { countries, isPhoneValid } from '@/constants/countries.ts'
import SpinnerDot from '@/components/lib/SpinnerDot'



const Contact = () => {
  const { t } = useTranslation('contactsPage')
  const { loading } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  const orderSchema = z.object({
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
    dispatch(sendOrder(data))
    formik.setValues(() => ({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '+994',
      description: '',
    }))
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
    validationSchema: toFormikValidationSchema(orderSchema),
  })

  return (
    <section className={styles.contact}>
      <div className={styles.contactWrapper}>
        <div className={styles.contact_inner} data-aos='fade-up' data-aos-duration='1000'>
          <AccentTitle>{t('contact')}</AccentTitle>
          <h2 className={styles.contact_title}>{`${t('content-label')}`}</h2>
          <p className={styles.contact_desc}>{t('content-description')}</p>
          <div className={styles.contact_box}>
            <div className={styles.box_icon}>
              <MapIcon width={'15'} height={'15'} />
            </div>
            <div className={styles.box_inner}>
              <h4>{t('location')}</h4>
              <div className={styles.box_inner_desc}>{t('address')} {t('floors')}</div>
            </div>

          </div>
          <div className={styles.contact_box}>
            <div className={styles.box_icon}>
              <MailBulk color={'#fff'} width={'15'} height={'15'} />
            </div>
            <div className={styles.box_inner}>
              <h4>{t('content-mail')}</h4>
              <div className={styles.box_inner_desc}>
                <a href={'mailto:info@chemical.az'}>info@chemical.az</a>
              </div>
            </div>

          </div>
          <div className={styles.contact_box}>
            <div className={styles.box_icon}>
              <PhoneIcon color={'#fff'} width={'15'} height={'15'} fill={'#fff'} />
            </div>
            <div className={styles.box_inner}>
              <h4>{t('content-phone')}</h4>
              <div className={styles.box_inner_desc}><a href={'tel:+994125255155'}>+994 12 525 51 55</a>
                <span>|</span>
                <a href={'tel:+994502913202'}>+994 50 291 32 02</a></div>
            </div>

          </div>

          <div className={styles.contact_sosials_wrapper}>
            <h3 className={styles.contact_sosials_title}>{t('content-socialMedia')}</h3>

            <div className={styles.contact_sosials}>
              <a href='https://www.facebook.com/kemex.international.llc/' target={'_blank'}><FacebookIcon color={'#304f6d'} width={'20'} height={'20'} /></a>
              <a href='https://wa.me/994502913202' target={'_blank'}><WhatsAppIcon color={'#304f6d'} width={'16'} height={'16'} /></a>
              <li><a href="https://t.me/ceo_kemex"  target={'_blank'}><TelegramIcon color={'#304f6d'} width={'16'} height={'16'} /></a></li>
            </div>
          </div>
        </div>
        <div className={styles.contact_form} data-aos='fade-up' data-aos-duration='1000'>
          <h2 className={styles.contact_form_title}>{t('form-headerLabel')}</h2>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
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
              <div className={styles.form_group} >
                <label>
                  {t('form-mobile')}
                  <span>*</span>
                </label>
                <PhoneInput
                  defaultCountry='az'
                  countries={countries}
                  inputStyle={{background:'#F1F6FB'}}
                  value={formik.values.phoneNumber}
                  className={'contact'}
                  onChange={(phoneNumber) => formik.setFieldValue('phoneNumber', phoneNumber)}
                  disabled={loading}
                />
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
                        rows={10} placeholder={`${t('form-placeholder')}`}
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
        </div>
      </div>
    </section>
  )
}

export default Contact
