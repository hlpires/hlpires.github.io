import React from 'react'
import './App.css'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Conhecimentos from './components/Conhecimentos'
import Projetos from './components/Projetos'

const something = () => {
  return (
    <div>
      <Header/>
      <Sobre/>
      <Conhecimentos/>
      <Projetos/>
    </div>
  ) 
}

export default something