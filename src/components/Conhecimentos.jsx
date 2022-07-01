import React from 'react'
import figma from '../img/figma.png'
import git from '../img/git.png'
import github from '../img/github.png'
import visual from '../img/Visual.png'


const Conhecimentos = () => {
  return (
    <div className = 'conhecimentos'>
      
      <div className = 'position'>
        
        <div id = 'img1' className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={figma} alt="" /> <h9></h9></div>
        <div id = 'img2' className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={git} alt="" /> <h9></h9></div>
        <div id = 'img3' className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={github} alt="" /> <h9></h9></div>
        <div id = 'img4' className ='conhecimentoBox'> <img className = 'conhecimentosIMG' src={visual} alt="" /> <h9></h9></div>
        <div id = 'img5' className ='conhecimentoBox'>  </div>
       
        
      </div>
    </div>
  )
}

export default Conhecimentos