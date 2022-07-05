import React from 'react'
import './App.css'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Conhecimentos from './components/Conhecimentos'
import Projetos from './components/Projetos'
import Rodape from './components/Rodape'
import Contato from './components/Contato'

const something = () => {
  return (
    <div>
      <Header/>
      <Sobre/>
      <Conhecimentos/>
      <Projetos/>
      <Contato/>
      <Rodape/>

    </div>
  ) 
}

export default something