import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HeaderNav from './components/header-nav/header-nav';
import About from './components/about/about';
import Home from './components/home/home';
import Donate from './components/donate/donate';
import Footer from './components/footer/footer';
import './App.scss';

function App() {

  /* Cart State */
  const [toys, setToys] = useState(localStorage.getItem('toys') || 0);
  const [food, setFood] = useState(localStorage.getItem('food') || 0);
  const [otherAmount, setOtherAmount] = useState(localStorage.getItem('otherAmount') || 0);
  const cartState = { toys, setToys, food, setFood, otherAmount, setOtherAmount };

  return (
      <div>
        <HeaderNav {...cartState}/>
        <Container fluid className="App d-flex flex-column justify-content-between">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/donate' element={<Donate {...cartState}/>} />
          </Routes>
        </Container>
        <Footer />
      </div>
  );
}

export default App;
