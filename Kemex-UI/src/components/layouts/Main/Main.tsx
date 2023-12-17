import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import Header from '@/components/layouts/Main/Header'
import Footer from '@/components/layouts/Main/Footer'


const Main = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <Toaster position='top-center' richColors />
      <Footer/>
    </main>
  )
}

export default Main
