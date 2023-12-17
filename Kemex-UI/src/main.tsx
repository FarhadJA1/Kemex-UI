import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from '@/store'
import '@/components/lib/Language/i18n'

import './styles/index.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
