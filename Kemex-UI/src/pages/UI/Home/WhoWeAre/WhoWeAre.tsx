import styles from './WhoWeAre.module.scss'
import CountBox from '@/components/lib/CountBox'
import AccentTitle from '@/components/lib/AccentTitle'
import ArrowRight from '@/components/lib/icons/ArrowRight'
import WorkerIcon from '@/components/lib/icons/WorkerIcon'
import CertificateIcon from '@/components/lib/icons/CertificateIcon'
import { useTranslation } from 'react-i18next'
const WhoWeAre = () => {
  const {t} = useTranslation('whatWeDo');
  return (
    <div className={styles.whoweare}>
      <div className={styles.imagesWrapper} data-aos="fade-left" data-aos-duration="1000">
        <img className={styles.img1} src='/about-us/kemex-5.jpeg' alt='who we are' />
        <img className={styles.img2} src='/about-us/kemex-3.jpg' alt='who we are' />
        <div className={styles.countBox}>
          <CountBox count={150} text={t('productCount')}/>
        </div>
      </div>
      <div className={styles.content} data-aos="fade-right" data-aos-duration="1000">
        <AccentTitle>{t('label')}</AccentTitle>
        <h3 className={styles.contentTitle}>{t('title')}</h3>
        <p className={styles.contentText}>{t('description')}</p>
        <div className={styles.contentList}>
          <div className={styles.contentIcons}>
            <div className={styles.iconsItem}>
              <CertificateIcon color={'#4A9ADD'} width={'50'} height={'50'}/>
              <span>{t('certified')}</span>
            </div>
            <div className={styles.contentItemsInner}>
              <div className={styles.contentItem}>
                <span className={styles.iconWrapper}><ArrowRight color={'#fff'}/></span>
                {t('leftList-firstLine')}
              </div>
              <div className={styles.contentItem}>
                <span className={styles.iconWrapper}><ArrowRight color={'#fff'}/></span>
                {t('leftList-secondLine')}
              </div>
              <div className={styles.contentItem}>
                <span className={styles.iconWrapper}><ArrowRight color={'#fff'}/></span>
                {t('leftList-thirdLine')}
              </div>
            </div>

          </div>
          <div className={styles.contentItems}>
            <div className={styles.iconsItem}>
              <WorkerIcon color={'#4A9ADD'} classNames={styles.worker}  width={'50'} height={'50'}/>
              <span>{t('employees')}</span>
            </div>
            <div className={styles.contentItemsInner}>
              <div className={styles.contentItem}>
                <span className={styles.iconWrapper}><ArrowRight color={'#fff'}/></span>
                {t('rightList-firstLine')}
              </div>
              <div className={styles.contentItem}>
                <span className={styles.iconWrapper}><ArrowRight color={'#fff'}/></span>
                {t('rightList-secondLine')}
              </div>
              <div className={styles.contentItem}>
                <span className={styles.iconWrapper}><ArrowRight color={'#fff'}/></span>
                {t('rightList-thirdLine')} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
