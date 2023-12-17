import styles from './Login.module.scss'
import Button from '@/components/lib/Button'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { z } from 'zod'
import { useAppDispatch } from '@/store/hooks.ts'
import { loginUser } from '@/store/authReducer.ts'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loginSchema = z.object({
    email: z.string({ required_error: 'E-poçt məcburidir' }).email('Düzgün E-poçt yazın'),
    password: z.string({ required_error: 'Parol məcburidir' }).min(4, 'Parol minimum 4 xarakter olmalıdır'),
  })
  const onSubmit = async (data: { email: string, password: string }) => {
    await dispatch(loginUser(data))
    navigate('/admin')
    formik.setValues(() => ({
      email: '',
      password:''
    }))
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(loginSchema),
  })
  return (
    <main className={styles.login}>
      <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
        <h2>Xoş Gəlmisiniz</h2>
        <section className={styles.group}>
          <input
            type="email"
            className={styles.input}
            name="email"
            // required
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="email" className={styles.label}>
            E-poçt
          </label>
          {formik.errors.email && (
            <div className={styles.formFieldError}>{formik.errors.email}</div>
          )}
        </section>
        <section className={styles.group}>
          <input
            type="password"
            className={styles.input}
            name="password"
            // required
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <label htmlFor="email" className={styles.label}>
            Parol
          </label>
          {formik.errors.password && (
            <div className={styles.formFieldError}>{formik.errors.password}</div>
          )}
        </section>
        <div style={{marginTop: '2rem'}}>
          <Button type="submit">Giriş edin</Button>
        </div>
          <span className={styles.footer}></span>

      </form>
    </main>
  )
}

export default Login
