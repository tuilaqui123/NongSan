import './App.css'
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Introduce from './pages/Introduce/Introduce';
import Footer from './components/Footer/Footer';
import Store from './pages/Store/Store';
import { AppProvider } from './Context/AppContext';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Contact from './pages/Contact/Contact';
import Farm from './pages/Farm/Farm';
import Blog from './pages/Blog/Blog';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderReceived from './pages/OrderReceived/OrderReceived';
import RollToTopButton from './components/ButtonComponent/RollToTopButton';
function App() {

  return (
    <div className="relative">
      <AppProvider>
        <RollToTopButton />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/gioi-thieu" element={<Introduce />} />
              <Route path="/cua-hang" element={<Store />} />
              <Route path="/cua-hang/:page" element={<Store />} />
              <Route path="/danh-muc/:tag" element={<Store />} />
              <Route path="/cua-hang/:tag/:name" element={<ItemDetails />} />
              <Route path="/lien-he" element={<Contact />} />
              <Route path="/tai-khoan" element={<Account />} />
              <Route path="/gio-hang" element={<Cart />} />
              <Route path="/thanh-toan" element={<Checkout />} />
              <Route path="/hoa-don" element={<OrderReceived />} />
              <Route path="/trang-trai" element={<Farm />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:name" element={<Blog />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App;
