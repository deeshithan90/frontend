import {Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Industries from './pages/Industries'
import Products from './pages/products'
import Blogs from './pages/Blogs'
import Whatsapp from './components/Whatsapp'
import Productone from './pages/Productone'
import { Toaster } from 'react-hot-toast'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashBoard'
import Cookie from './pages/Cookie'
import EnquiryPopup from './components/ContactUs'

const AppRun = () => {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Inderste' element={<Industries/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/productone' element={<Productone/>}/>
          <Route path='/cookie' element={<Cookie/>}/>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path='/:id/:id' element={<div className='flexs justify-center'>
              <h1 className='text-red-500 mt-90 mb-30 text-5xl'>404 page not found</h1>
          </div>}/>
          <Route path='/:id' element={<div className='flexs justify-center'>
              <h1 className='text-red-500 mt-90 mb-30 text-5xl'>404 page not found</h1>
          </div>}/>
          <Route path='/:id/:id/:id' element={<div className='flexs justify-center'>
              <h1 className='text-red-500 mt-90 mb-30 text-5xl'>404 page not found</h1>
          </div>}/>
          <Route path='/:id/:id/:id/:id' element={<div className='flexs justify-center'>
              <h1 className='text-red-500 mt-90 mb-30 text-5xl'>404 page not found</h1>
          </div>}/>
      </Routes>
      <EnquiryPopup/>
      <Footer/>
      <Whatsapp/>
    </>
  )
}

export default AppRun