import React from 'react'
import curiosity from '../img/curiosity.png'
import inovate from '../img/inovate.png'
import criative from '../img/criative.png'
const Sobre = () => {
  return (
    
    <div  className = 'all'>
     <div className = 'sobreTitle'><h3>Sobre</h3></div>

     <div className = 'sobre'>
     <div className = 'posicionarConteudo'>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {criative}></img>
          
        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {inovate}></img>
        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {curiosity}></img>
        </div>
      </div> 
     </div>

    
      
      <div className  =' habilidades'>

      </div>
      <div className = 'perfil'>
        <img></img>
        <h4></h4>

      </div>

    </div>
  )
}

export default Sobre