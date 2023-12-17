import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import FacebookIcon from '@/components/lib/icons/FacebookIcon'
import WhatsAppIcon from '@/components/lib/icons/WhatsappIcon'
import PhoneIcon from '@/components/lib/icons/PhoneIcon'
import MobileIcon from '@/components/lib/icons/MobileIcon'
import MailBulkIcon from '@/components/lib/icons/MailBulkIcon'
import ArrowRight from '@/components/lib/icons/ArrowRight'
import { useTranslation } from 'react-i18next'
import TelegramIcon from '@/components/lib/icons/TelegramIcon'
const Footer = () => {
  const {t} = useTranslation('footer');
  return (
    <footer className={styles.footer}
    >
      <div className={styles.footerOverlay}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerInner}>
            <div className={styles.footerLogo}>
              <Link  to={'/'}><img className={styles.logo} src='/logo-2.png' alt='logo' /></Link>
              <div className={styles.text}>{t('description')}</div>
              <ul className={styles.socials}>
                <li><a href='https://www.facebook.com/kemex.international.llc/' target={'_blank'}><FacebookIcon width={'20'} height={'20'}/></a></li>
                <li><a href='https://wa.me/994502913202' target={'_blank'}><WhatsAppIcon width={'16'} height={'16'}/></a></li>
                <li><a href="https://t.me/ceo_kemex"  target={'_blank'}><TelegramIcon width={'16'} height={'16'} /></a></li>
              </ul>
            </div>
            <div className={styles.footerLinks}>
              <h3 className={styles.footerTitle}>{t('services')}</h3>
              <nav className={styles.navLinks}>
                <Link to={'/'} className={styles.navLink}><ArrowRight color={'#4A9ADD'}/>{t('home')}</Link>
                <Link to={'/about'} className={styles.navLink}><ArrowRight color={'#4A9ADD'}/>{t('about')}</Link>
                <Link to={'/products'} className={styles.navLink}><ArrowRight color={'#4A9ADD'}/>{t('products')}</Link>
                <Link to={'/contact'} className={styles.navLink}><ArrowRight color={'#4A9ADD'}/>{t('contact')}</Link>
              </nav>
            </div>
          </div>
          <div className={styles.footerInner}>
            <div className={styles.footerContacts}>
              <h3 className={styles.footerTitle}>{t('contacts')}</h3>
              <ul className={styles.socialList}>
                <li>
                  <a href='tel:+994125255155'>
                    <PhoneIcon color={'#4A9ADD'} width={'18'} height={'18'} />
                    +994 12 525 51 55
                  </a>
                </li>
                <li>
                  <a href='tel:+994502913202'>
                    <MobileIcon color={'#4A9ADD'} width={'18'} height={'18'} />
                    +994 50 291 32 02
                  </a>
                </li>
                <li>
                  <a href='mailto:info@chemical.az'>
                    <MailBulkIcon color={'#4A9ADD'} width={'18'} height={'18'}   />
                    info@chemical.az
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerLocation}>
              <h3 className={styles.footerTitle}>{t('location')}</h3>
              <p> {t('address')} {t('floors')}</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d189.87139168288422!2d49.863451495683485!3d40.41012973746736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307de7723ba995%3A0xab9305bd5d549930!2sKemex%20International%20LLC!5e0!3m2!1saz!2saz!4v1692619192454!5m2!1saz!2saz"
                style={{ border:'0' }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </div>
        <div className={styles.copy}>©Copyright  {new Date().getFullYear()} KEMEX. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
