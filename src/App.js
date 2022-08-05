import React,{useState,useEffect} from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import ReactGa from 'react-ga'



ReactGa.initialize('G-LEXL8NFTK2')


function App () {

  useEffect(() => {
    ReactGa.pageview(window.location.pathname)
    

  })

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