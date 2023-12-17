import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from '@/components/layouts/Main'
import Spinner from '@/components/lib/Spinner'
import ProtectedRoute from '@/components/lib/ProtectedRoute'
import ScrollToTop from '@/components/lib/ScrollToTop'

import Login from '@/pages/Admin/Login'
import Dashboard from '@/pages/Admin/Dashboard'
import Orders from '@/pages/Admin/Orders'
import Categories from '@/pages/Admin/Categories'
import ProductsAll from '@/pages/Admin/Products'
import ProductDetail from '@/pages/Admin/Products/ProductDetail'
import Industrial from '@/pages/Admin/Industrial'
import IndustrialDetail from '@/pages/Admin/Industrial/IndustrialDetail'

import Home from '@/pages/UI/Home'
import Contact from '@/pages/UI/Contact'
import About from '@/pages/UI/About'
import Error from '@/pages/UI/Error'
import CategoryProduct from '@/pages/UI/CategoryProduct'
import Products from '@/pages/UI/Products'
import HomeProductDetail from '@/pages/UI/HomeProductDetail'



const Routing = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path={'/'} element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path={'contact'} element={<Contact/>}/>
            <Route path={'about'} element={<About/>}/>
            <Route path={'products'} element={<Products/>}/>
            <Route path={'products/:id'} element={<CategoryProduct/>}/>
            <Route path={'products/:id/:productId'} element={<HomeProductDetail/>}/>
          </Route>
          <Route path={'/admin'} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
            <Route index element={<Orders/>}/>
            <Route path={'categories'} element={<Categories/>}/>
            <Route path={'products-all'} element={<ProductsAll/>}/>
            <Route path={'products-all/:id'} element={<ProductDetail/>}/>
            <Route path={'industrial'} element={<Industrial/>}/>
            <Route path={'industrial/:id'} element={<IndustrialDetail/>}/>
          </Route>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'*'} element={<Error/>}/>
        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default Routing
