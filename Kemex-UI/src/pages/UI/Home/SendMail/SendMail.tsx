import styles from './Sendmail.module.scss'
import Button from '@/components/lib/Button'
import Divider from '@/components/lib/Divider'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { z } from 'zod'
import { IOrder } from '@/store/types.ts'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { sendOrder } from '@/store/productReducer.ts'
import { useTranslation } from 'react-i18next'
import { PhoneInput } from 'react-international-phone'
import { countries, isPhoneValid } from '@/constants/countries.ts'
import SpinnerDot from '@/components/lib/SpinnerDot'

const SendMail = () => {
  const { t } = useTranslation('contactForm')
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
    //console.log(data)
    dispatch(sendOrder(data))
    formik.setValues(() => ({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '+994 ',
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
      isDone: false,
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(orderSchema),
  })

  return (
    <div className={styles.sendMail} data-aos='fade-left' data-aos-duration='1000'>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('label')}</h3>
        <p className={styles.desc}>{t('labelDescription')}</p>
        <Divider />
      </div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.formField}>
          <input
            type='text'
            name='name'
            id='name'
            placeholder={`${t('name')}`}
            value={formik.values.name}
            onChange={formik.handleChange}
            disabled={loading}
          />
          {formik.errors.name && (
            <div className={styles.formFieldError}>{formik.errors.name}</div>
          )}
        </div>
        <div className={styles.formField}>
          <input
            type='text'
            name='surname'
            id='surname'
            placeholder={`${t('surname')}`}
            value={formik.values.surname}
            onChange={formik.handleChange}
            disabled={loading}
          />
          {formik.errors.surname && (
            <div className={styles.formFieldError}>{formik.errors.surname}</div>
          )}
        </div>
        <div className={styles.formField}>
          <input
            type='text'
            name='email'
            id='email'
            placeholder={`${t('mail')}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled={loading}
          />
          {formik.errors.email && (
            <div className={styles.formFieldError}>{formik.errors.email}</div>
          )}
        </div>
        <div
          className={styles.formField}
        >
          <PhoneInput
            defaultCountry='az'
            countries={countries}
            style={{borderRadius:'0'}}
            inputStyle={{background:'#eaedef'}}
            value={formik.values.phoneNumber}
            onChange={(phoneNumber) => formik.setFieldValue('phoneNumber', phoneNumber)}
            disabled={loading}
          />
          {formik.errors.phoneNumber && (
            <div className={styles.formFieldError}>{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div className={styles.formTextField}>
          <textarea
            name='description'
            id='description'
            rows={5}
            placeholder={`${t('form-placeholder')}`}
            value={formik.values.description}
            onChange={formik.handleChange}
            disabled={loading}
          ></textarea>
          {formik.errors.description && (
            <div className={styles.formFieldError}>{formik.errors.description}</div>
          )}
        </div>
        <Button type={'submit'}>{loading ? <SpinnerDot/>: t('button')}</Button>
      </form>
    </div>
  )
}

export default SendMail
