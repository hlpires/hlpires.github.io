import React from 'react'
import figma from '../img/figma.png'
import git from '../img/git.png'
import github from '../img/github.png'
import visual from '../img/Visual.png'


const Conhecimentos = () => {
  return (
    <div className = 'conhecimentos'>
      <div className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={figma} alt="" /> <h9></h9></div>
      <div className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={git} alt="" /> <h9></h9></div>
      <div className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={github} alt="" /> <h9></h9></div>
      <div className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={visual} alt="" /> <h9></h9></div>
      <div className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src='{}' alt="" /> <h9></h9></div>
      <div className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src='{}' alt="" /> <h9></h9></div>
      
    </div>
  )
}

export default Conhecimentos