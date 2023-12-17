import { useEffect, useState } from 'react'
import AOS from 'aos'

import Routing from '@/Routing'
import SpinnerKemex from '@/components/lib/SpinnerKemex'

import 'aos/dist/aos.css'
import 'rodal/lib/rodal.css'
import 'react-tooltip/dist/react-tooltip.css'
import 'react-international-phone/style.css'


function App() {
  const [loadApp, setLoadApp] = useState(false)
  useEffect(() => {
    setLoadApp(true)
    setTimeout(() => {
      setLoadApp(false)
    }, 2000)
    AOS.init()
  }, [])

  return (
    <>
      {loadApp ? <SpinnerKemex/> : <Routing />}
    </>
  )
}

export default App
