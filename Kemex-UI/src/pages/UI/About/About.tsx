import styles from './About.module.scss'
import PageHero from '@/components/lib/PageHero'
import { useTranslation } from 'react-i18next'
import AccentTitle from '@/components/lib/AccentTitle'
import CountBox from '@/components/lib/CountBox'
import BusinessTimeIcon from '@/components/lib/icons/BusinessTimeIcon'
import ArrowRight from '@/components/lib/icons/ArrowRight'
import PhoneLgIcon from '@/components/lib/icons/PhoneLgIcon'
import FacebookIcon from '@/components/lib/icons/FacebookIcon'
import WhatsAppIcon from '@/components/lib/icons/WhatsappIcon'
import TelegramIcon from '@/components/lib/icons/TelegramIcon'

const About = () => {
  const {t} = useTranslation('aboutPage');
  return (
    <section className={styles.about}>
      <PageHero
        subtitle={`${t('about')}`}
        title={`${t('label')}`}
        desc={`${t('description')}`}
        bgPath={'/hero-slider/slide1.png'}
      />
      {/* <AboutUs /> */}
      <section className={styles.elementaryWrapper}>
        <div className={styles.overlay}>
          <div className={styles.elementary}>
            <div className={styles.elLeft} data-aos="fade-right" data-aos-duration="1000">
              <AccentTitle>{t('label')}</AccentTitle>
              <h2 className={styles.title}>{t('title')}</h2>
              <div className={styles.infoDesc}>
                <p>{t('longDesc-1')}</p>
                <p>{t('longDesc-2')}</p>
                <p>{t('longDesc-3')}</p>
              </div>
            </div>
            <div className={styles.elRight} data-aos="fade-left" data-aos-duration="1000">
              <div className={styles.left}>
                <img src={'/hero-slider/slider6.jpeg'} alt='' />
                <img src={'/about-us/kemex-6.jpeg'} alt='' />
              </div>
              <div className={styles.right}>
                <img src={'/about-us/kemex-1.jpg'} alt='' />
              </div>
              <div className={styles.projectCount}>
                <CountBox count={270} text={t('clientCount')} />
              </div>
            </div>
          </div>
          <div className={styles.elementary}>
            <div className={styles.leftInfo} data-aos="fade-left" data-aos-duration="1000">
              <div className={styles.infoOverlay}></div>
              <div className={styles.info}>
                <div className={styles.infoInner}>
                  <div className={styles.experience}>
                    <BusinessTimeIcon color={'#fff'} width={'50'} height={'50'} />
                    <h2><span className={styles.number}> + </span><span
                      className={styles.number}> 25 </span><span> {t('official')} </span></h2>
                    <h3 className={styles.partnership}>{t('partnership')}</h3>
                  </div>
                  <div className={styles.list}>
                    <ul >
                      <li>
                        <span className={styles.listArrow}><ArrowRight color={'#fff'} /></span>
                        {t('firstLine')}
                      </li>
                      <li>
                        <span className={styles.listArrow}><ArrowRight color={'#fff'} /></span>
                        {t('secondLine')}
                      </li>
                      <li><span className={styles.listArrow}><ArrowRight color={'#fff'} /></span>
                        {t('thirdLine')}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.inFoContacts}>
                  <div className={styles.inFoPhone}>
                    <div className={styles.phoneWrapper}>
                      <PhoneLgIcon color={'#4A9ADD'}/>
                    </div>
                    <div>
                      <p >{t('callLabel')}: </p>
                      <a href={'tel:+994502913202'}>+994 50 291 32 02</a>
                    </div>
                  </div>
                  <div className={styles.contact_sosials_wrapper}>
                    <p className={styles.contact_sosials_title}>{t('content-socialMedia')}:</p>

                    <div className={styles.contact_sosials}>
                      <a href='https://www.facebook.com/kemex.international.llc/'><FacebookIcon color={'#EAEDEF'} width={'20'} height={'20'} /></a>
                      <a href='https://wa.me/994502913202'><WhatsAppIcon color={'#EAEDEF'} width={'16'} height={'16'} /></a>
                      <li><a href="https://t.me/ceo_kemex"  target={'_blank'}><TelegramIcon color={'#EAEDEF'} width={'16'} height={'16'} /></a></li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.elLeft} ${styles.ml}`} data-aos="fade-right" data-aos-duration="1000">
              <div className={styles.infoDesc}>
                <p>{t('longDesc-4')}</p>
                <p>{t('longDesc-5')}</p>
                <p>{t('longDesc-6')}</p>
              </div>
            </div>

          </div>
        </div>

      </section>
    </section>
  )
}

export default About
