import './App.css'
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Introduce from './pages/Introduce/Introduce';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <div className="relative">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu/" element={<Introduce />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
