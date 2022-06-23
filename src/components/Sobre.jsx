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
          <h6>Responsivo</h6>
          <h5>Design Responsivo, minhas aplicações funcionam em mobile, pc e outros dispositivos</h5>
        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {inovate}></img>
          <h6>Dinâmico</h6>
          <h5>Sempre buscando por novas tecnologias e aplicando em meus projetos.
</h5>
        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {curiosity}></img>
          <h6>Criativo</h6>
          <h5>Websites não precisam ser estaticos, amo dar vida a eles..</h5>
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