import React from 'react'
import './App.css'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Conhecimentos from './components/Conhecimentos'
import Projetos from './components/Projetos'
import Rodape from './components/Rodape'

const something = () => {
  return (
    <div>
      <Header/>
      <Sobre/>
      <Conhecimentos/>
      <Projetos/>
      <Rodape/>
    </div>
  ) 
}

export default something