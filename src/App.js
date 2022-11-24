import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HeaderNav from './components/header-nav/header-nav';
import About from './components/about/about';
import Home from './components/home/home';
import Donate from './components/donate/donate';
import Footer from './components/footer/footer';
import './App.scss';

function App() {

  const getFood = () => {
    if (!localStorage.getItem("food")) {
      localStorage.setItem("food", '0');
    }
  };

  const getToys = () => {
    if (!localStorage.getItem("toys")) {
      localStorage.setItem("toys", '0');
    }
  };

  const getOtherAmount = () => {
    if (!localStorage.getItem("otherAmount")) {
      localStorage.setItem("otherAmount", '0');
    }
  };

  useEffect(() => {
    getFood();
    getToys();
    getOtherAmount();
  }, [])

  return (
    <Container fluid className="App d-flex flex-column justify-content-between">
      <div>
        <HeaderNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
