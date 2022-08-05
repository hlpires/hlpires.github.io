import React,{useState,useEffect} from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import ReactGa from 'react-ga'

function App () {
  
  
  
useEffect(() => {

  ReactGa.initialize('G-LEXL8NFTK2')
  ReactGa.pageview('/')

  }, [])


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