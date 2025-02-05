import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Location from './components/Location';
import Gallary from './components/Gallary';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <>
      <Nav></Nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/location' element={<Location/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/gallery' element={<Gallary/>}></Route>
      </Routes>
      <FooterSection/>
    </>
  )
}

export default App
