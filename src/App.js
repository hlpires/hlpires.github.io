import React, { useState, useEffect } from 'react'
import './App.css'
// import Modal from './components/Modal'
import Index from './components/Index'
import Header from './components/Header'
import Modal from './components/Modal'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import './App.css'



function App() {
  //main
  return (
    <div>
      <Header />
      <Sobre />
      <Modal />
      {/* <Conhecimentos/> */}
      <Projetos />
      <Contato />
    </div>)
}

export default App
