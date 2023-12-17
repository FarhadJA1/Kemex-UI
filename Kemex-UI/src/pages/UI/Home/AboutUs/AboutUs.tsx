import styles from './AboutUs.module.scss'
import AccentTitle from '@/components/lib/AccentTitle'
import ArrowRight from '@/components/lib/icons/ArrowRight'
import BusinessTimeIcon from '@/components/lib/icons/BusinessTimeIcon'
import Button from '@/components/lib/Button'
import PhoneLgIcon from '@/components/lib/icons/PhoneLgIcon'
import { Link } from 'react-router-dom'
import CountBox from '@/components/lib/CountBox'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const {t} = useTranslation('aboutContent');
  return (
    <section className={styles.elementaryWrapper}>
      <div className={styles.overlay}>
        <div className={styles.elementary}>
          <div className={styles.elLeft} data-aos="fade-right" data-aos-duration="1000">
            <AccentTitle>{t('label')}</AccentTitle>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.description}>{t('description')}</div>

            <div className={styles.info}>
              <div className={styles.infoInner}>
                <div className={styles.experience}>
                  <BusinessTimeIcon color={'#4A9ADD'} width={'50'} height={'50'} />
                  <h2><span className={styles.number}> + </span><span
                    className={styles.number}> 25 </span><span> {t('official')} </span></h2>
                  <h3>{t('partnership')}</h3>
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
                <Link to={'/about'}><Button>{t('button')}</Button></Link>
                <div className={styles.inFoPhone}>
                  <div className={styles.phoneWrapper}>
                    <PhoneLgIcon color={'#4A9ADD'}/>
                  </div>
                  <div>
                    <p>{t('callLabel')}: </p>
                    <a href={'tel:+994502913202'}>+994 50 291 32 02</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.elRight} data-aos="fade-left" data-aos-duration="1000">
            <div className={styles.left}>
              <img src={'/about-us/about-us-1.webp'} alt='' />
              <img src={'/about-us/about-us-2.webp'} alt='' />
            </div>
            <div className={styles.right}>
              <img src={'/about-us/kemex-1.jpg'} alt='' />
            </div>
            <div className={styles.projectCount}>
              <CountBox count={270} text={t('clientCount')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
