import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.scss'
import OrdersIcon from '@/components/lib/icons/OrdersIcon'
import CategoriesIcon from '@/components/lib/icons/CategoriesIcon'
import ProductsIcon from '@/components/lib/icons/ProductsIcon'
import { useAppDispatch } from '@/store/hooks.ts'
import { signOut } from '@/store/authReducer.ts'
import SignOutIcon from '@/components/lib/icons/SignOutIcon'
import { Toaster } from 'sonner'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onLogOut = () => {
    dispatch(signOut())
    navigate('/login')
  }
  return (
    <main className={styles.admin}>
      <header className={styles.banner}>
        <div className={styles.bannerInner}>
          <div style={{display:'flex',alignItems:'center', gap:'1rem'}}>
            <Link to={'/'}>
              <img src='/KEMEX_LOGO.png' alt='' className={styles.bannerLogo} />
            </Link>
            <h1>Admin</h1>
          </div>
          <ul className={styles.utilities}>
            <li>
              <button className={styles.bannerLogout} onClick={onLogOut}>
                Çıxış et
                <SignOutIcon/>
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className={styles.adminBody}>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationLink}>
              <NavLink to='/admin' end className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}>
                <OrdersIcon />
                Sifarişlər
              </NavLink>
            </li>
            <li className={styles.navigationLink}>
              <NavLink to='/admin/categories' className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}>
                <CategoriesIcon />
                Kategoriya
              </NavLink>
            </li>
            <li className={styles.navigationLink}>
              <NavLink to='/admin/products-all' className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}>
                <ProductsIcon />
                Məhsullar
              </NavLink>
            </li>
            <li className={styles.navigationLink}>
              <NavLink to='/admin/industrial' className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}>
                <ProductsIcon />
                Sənaye K/ Maddələri
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
        <Toaster position='top-center' richColors />
      </div>

      {/* <footer>Dashboard Footer</footer> */}
    </main>
  )
}

export default Dashboard
