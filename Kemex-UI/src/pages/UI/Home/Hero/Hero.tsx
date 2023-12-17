import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'


import styles from './Hero.module.scss'
import Button from '@/components/lib/Button'
import ArrowRight from '@/components/lib/icons/ArrowRight'
import AccentTitle from '@/components/lib/AccentTitle'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const Hero = () => {
  const {t} = useTranslation('slider');
  return (
    <section className={styles.hero}>
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        spaceBetween={0}
        speed={2000}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.imgWrapper}>
          <img src='/hero-slider/slide1.png' alt='kemex image' className={styles.sliderImg} />
        </SwiperSlide>
        <SwiperSlide className={styles.imgWrapper}>
          <div className={styles.slideOverlay}></div>
          <img src='/hero-slider/slider6.jpeg' alt='kemex image' className={styles.sliderImg} />
        </SwiperSlide>
        <SwiperSlide className={styles.imgWrapper}>
          <img src='/hero-slider/slide2.png' alt='kemex image' className={styles.sliderImg} />
        </SwiperSlide>
        <SwiperSlide className={styles.imgWrapper}>
          <img src='/hero-slider/slide3.png' alt='kemex image' className={styles.sliderImg} />
        </SwiperSlide>
        <SwiperSlide className={styles.imgWrapper}>
          <img src='/hero-slider/slide4.png' alt='kemex image' className={styles.sliderImg} />
        </SwiperSlide>
        <SwiperSlide className={styles.imgWrapper}>
          <div className={styles.slideOverlay}></div>
          <img src='/hero-slider/slider6.jpeg' alt='kemex image' className={styles.sliderImg} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.heroContent}>
        <div className={styles.heroInner} data-aos="fade-right" data-aos-duration="1000">
          <AccentTitle color={'#4A9ADD'}>
            {t('welcome')}
          </AccentTitle>
          <h1 className={styles.title}>{t('label')}</h1>
          <p>{t('description')}</p>
          <Link to={'/products'}>
            <Button classNames={styles.heroButton}>
              {t('button')}
              <ArrowRight color={'#304f6d'} width={'14'} height={'14'} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
