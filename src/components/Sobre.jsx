import React from 'react'
import curiosity from '../img/curiosity.png'
import inovate from '../img/inovate.png'
import criative from '../img/criative.png'
import perfil from '../img/perfil.jpg'
const Sobre = () => {
  return (
    
    <div >
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
          <h5>Sempre buscando por novas tecnologias e aplicando em meus projetos.</h5>

        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {curiosity}></img>
          <h6>Criativo</h6>
          <h5>Websites não precisam ser estaticos, amo dar vida a eles..</h5>
        </div>
      </div>
      
    
     </div>
     <div className = 'perfil'>
       <div className = 'perfilcontent'>
         <img className='perfilimg' src={perfil} alt="" />
         <div className = 'mascaratext'>
           <h8>Quem sou eu?</h8>
           <h9>Sou um desenvolvedor Front-End independente, em São Paulo</h9>
         </div>

       </div>
        

      </div>


    </div>
  )
}

export default Sobre