import React from 'react'
import reactimg from '../img/react.png'
import javascript from '../img/javascript.png'
import html from '../img/html.png'
import perfil from '../img/perfil.jpg'


const Sobre = () => {
  return (
    
  <div className= 'sobreall' >
   <div className = 'position'>
     <div className = 'sobreTitle'><h3></h3></div>
     <div className = 'sobre'>
     





     <div className = 'posicionarConteudo'>
        <div className = 'conteudo' id = 'conteudo1'>
          <img className = 'conteudoimage'  src = {reactimg}></img>
          <h4>React</h4>
          <h5>Design Responsivo, minhas aplicações funcionam em mobile, pc e outros dispositivos</h5>
        </div>
        <div className = 'conteudo' id = 'conteudo2'>
          <img className = 'conteudoimage'  src = {javascript}></img>
          <h4>Javascript</h4>
          <h5>Sempre buscando por novas tecnologias e aplicando em meus projetos.</h5>
         

        </div>
        <div className = 'conteudo' id = 'conteudo3'>
          <img className = 'conteudoimage' src = {html}></img>
          <h4>HTML / CSS</h4>
          <h5>Websites não precisam ser estaticos, amo dar vida a eles..</h5>
        </div>
      
      </div>
   
    
     </div>
    
 

     </div>
  </div>
  )
}

export default Sobre