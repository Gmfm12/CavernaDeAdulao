import React from 'react';
import Header from './components/header/Header';
import Topbar from './components/topbar/Topbar';
import Sobre from './components/sobre/Sobre';
import ComoAjudar from './components/comoajudar/ComoAjudar';
import Galeria from './components/galeria/Galeria';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Sobre />
      <ComoAjudar />
      <Galeria />
      <Contato />
      <Footer />
    </>
  )
}

export default App
