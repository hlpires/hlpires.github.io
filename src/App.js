import React,{useState,useEffect} from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'


function App () {


return (
  <div>
  <Header/>
  <Sobre />
  <Modal />
  <Projetos/>
  <Contato/>
  </div>
  )

}

export default App