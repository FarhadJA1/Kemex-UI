import Hero from '@/pages/UI/Home/Hero'
import SendMail from '@/pages/UI/Home/SendMail'
import AboutUs from '@/pages/UI/Home/AboutUs'
import WhoWeAre from '@/pages/UI/Home/WhoWeAre'
import styles from './Home.module.scss'


const Home = () => {
  return (
    <main style={{overflowX:'hidden'}}>
      <div className={styles.welcome}>
        <Hero />
        <SendMail />
      </div>
      <AboutUs />
      <WhoWeAre/>
    </main>
  )
}

export default Home
