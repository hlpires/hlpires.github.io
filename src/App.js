import React,{useState,useEffect} from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import ReactGa from 'react-ga'
import ModalEcommerce from './components/ModalEcommerce'


ReactGa.initialize('G-LEXL8NFTK2')


function App () {



  useEffect(() => {
    ReactGa.pageview(window.location.pathname)
  })

    
    return (
      <div>
        <Sobre/>
        <Projetos/>
      {/*<Header/>
      <Sobre/>
      <Projetos/>
      <Contato/>*/}
      </div>
      )
  


}

export default App