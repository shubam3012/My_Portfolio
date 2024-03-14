
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import Projectroute from './Pages/Projectroute'
import ContactUs from './Pages/ContactUs'
import Blog from './Pages/Blog'
import Navbar from './Pages/Navbar'

export default function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Index/>}></Route>
      <Route path='/Project' element={<Projectroute/>}></Route>
      <Route path='/Contact' element={<ContactUs/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
