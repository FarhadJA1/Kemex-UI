import ContactForm from '../Contact/ContactForm'
import PageHero from '@/components/lib/PageHero'
import styles from './contact.module.scss'
import { useTranslation } from 'react-i18next'
const Contact = () => {
  const {t} = useTranslation('contactsPage');
  return (
    <section >
      <PageHero
        title={`${t('header-label')}`}
        subtitle={`${t('contact')}`}
        desc={`${t('header-description')}`}
        bgPath={'/hero-slider/slide2.png'} />
      <ContactForm />
      <div className={styles.contact_map_bg}>
        <div className={styles.contact_map_wrapper} data-aos="zoom-in-up" data-aos-duration="1000">
          <iframe
            className={styles.contact_map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d189.87139168288422!2d49.863451495683485!3d40.41012973746736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307de7723ba995%3A0xab9305bd5d549930!2sKemex%20International%20LLC!5e0!3m2!1saz!2saz!4v1692619192454!5m2!1saz!2saz"
             style={{ border:'0' }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
