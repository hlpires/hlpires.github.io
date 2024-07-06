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

  const [translate, setTranslate] = useState(true)
  //maints
  return (
    <div>
      <Header location={translate} handleLocation={() => setTranslate(prev => !prev)} />
      <Sobre location={translate} />
      <Modal location={translate} />
      {/* <Conhecimentos/> */}
      <Projetos location={translate} />
      <Contato location={translate} />
    </div>)
}

export default App
