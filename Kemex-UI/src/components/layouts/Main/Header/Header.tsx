import styles from './Header.module.scss'
import FacebookIcon from '@/components/lib/icons/FacebookIcon'
import WhatsAppIcon from '@/components/lib/icons/WhatsappIcon'
import PhoneIcon from '@/components/lib/icons/PhoneIcon'
import MobileIcon from '@/components/lib/icons/MobileIcon'
import EnvelopeIcon from '@/components/lib/icons/EnvelopeIcon'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@/components/lib/icons/MenuIcon'
import { useState } from 'react'
import CloseIcon from '@/components/lib/icons/CloseIcon'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import TelegramIcon from '@/components/lib/icons/TelegramIcon'
 
const Header = () => {
  const [bgColor, setBgColor] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const {t} = useTranslation('menu');

  const handleChangeBgColor = () => {
    if (window.scrollY >= 100) {
      setBgColor(true)
    } else setBgColor(false)
  }
  window.addEventListener('scroll', handleChangeBgColor)

  const onToggleMenu = () =>{
    setShowMenu(!showMenu)
  }
  const ChangeLanguageHandler = (param:string)=>{
      i18n.changeLanguage(param);
  }

  return (
    <header className={styles.header}>
      <section className={styles.headerTop}>
        <div className={styles.headerSocialsWrapper}>
          <div className={styles.logoWrapper}>
            <Link to={'/'}><img className={styles.logo} src='/logo.png' alt='logo' /></Link>
          </div>
          <div className={styles.headerSocials}>
            <ul className={`${styles.socialList} ${styles.lang}`}>
              <li><a href='https://www.facebook.com/kemex.international.llc/' target={'_blank'} className={styles.socialIcon}><FacebookIcon width={'20'} height={'20'} color={'#304f6d'} /></a></li>
              <li><a href='https://wa.me/994502913202' target={'_blank'} className={styles.socialIcon}><WhatsAppIcon width={'16'} height={'16'} color={'#304f6d'} /></a></li>
              <li><a href="https://t.me/ceo_kemex"  target={'_blank'} className={styles.socialIcon}><TelegramIcon width={'16'} height={'16'} color={'#304f6d'} /></a></li>
            </ul>
            <ul className={`${styles.socialList} ${styles.contactList}`}>
              <li>
                <a href='tel:+994125255155'>
                  <PhoneIcon width={'18'} height={'18'} color={'#304f6d'} />
                  +994 12 525 51 55
                </a>
              </li>
              <li>
                <a href='tel:+994502913202'>
                  <MobileIcon width={'18'} height={'18'} color={'#304f6d'} />
                  +994 50 291 32 02
                </a>
              </li>
              <li className={styles.mailLink}>
                <a href='mailto:info@chemical.az'>
                  <EnvelopeIcon width={'18'} height={'18'} color={'#304f6d'} />
                  info@chemical.az
                </a>
              </li>
            </ul>
            <ul className={`${styles.socialList} ${styles.lang}`}>
              <li onClick={()=>ChangeLanguageHandler('az')} value={'az'}><img src='/azerbaijan.png' alt='az' /></li>
              <li onClick={()=>ChangeLanguageHandler('ru')} value={'ru'}><img src='/russia.png' alt='ru' /></li>
              <li onClick={()=>ChangeLanguageHandler('en')} value={'en'}><img src='/united.png' alt='en' /></li>
            </ul>
          </div>
        </div>
      </section>
      <section className={!bgColor ? `${styles.nav} ${styles.headerBg}` :`${styles.nav} ${styles.headerBg}`}>
        <div className={styles.navInner}>
          <nav className={`${styles.navLinks}`}>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'activeLink' : 'link')} end>{t('home')}</NavLink>
            <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>{t('about')}</NavLink>
            <NavLink to={'/products'}
                     className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>{t('products')}</NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>{t('contact')}</NavLink>
          </nav>
          <div className={styles.navMenu}>
            <button className={styles.menuBtn} onClick={onToggleMenu}>
              {showMenu? <CloseIcon />: <MenuIcon />}
            </button>
          </div>
        </div>
      </section>
      <nav className={showMenu ?`${styles.navMobile} ${styles.menuActive}`:`${styles.navMobile} ${styles.navHidden}`}>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          end
          onClick={() => setShowMenu(false)}
        >{t('home')}</NavLink>
        <NavLink
          to={'/about'}
          className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          onClick={() => setShowMenu(false)}
        >{t('about')}</NavLink>
        <NavLink
          to={'/products'}
                 className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          onClick={() => setShowMenu(false)}
        >{t('products')}</NavLink>
        <NavLink
          to={'/contact'}
          className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          onClick={() => setShowMenu(false)}
        >{t('contact')}</NavLink>
        <ul className={`${styles.socialList} ${styles.mobileLang}`}>
          <li onClick={()=>ChangeLanguageHandler('az')} value={'az'}><img src='/azerbaijan.png' alt='az' /></li>
          <li onClick={()=>ChangeLanguageHandler('ru')} value={'ru'}><img src='/russia.png' alt='ru' /></li>
          <li onClick={()=>ChangeLanguageHandler('en')} value={'en'}><img src='/united.png' alt='en' /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
