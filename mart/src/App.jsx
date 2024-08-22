import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Kids from './components/Kids/Kids';
import Cartitems from './components/Cartitems/Cartitems';
import FavouriteItems from './components/FavouriteItems/FavouriteItems';
import Details from './components/Detailscomponent/Details';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
          <Route path='cart' element={<Cartitems />} />
          <Route path='favourites' element={<FavouriteItems />} />
          <Route path='women/:id' element={<Details />} />
          <Route path='men/:id' element={<Details />} />
        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App
