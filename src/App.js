import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Cards from './component/Cards';
import PokeInfo from './component/PokeInfo';

function App() {
  return (
    <div>
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
