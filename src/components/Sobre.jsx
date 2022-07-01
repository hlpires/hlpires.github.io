import React from 'react'
import reactimg from '../img/react.png'
import javascript from '../img/javascript.png'
import html from '../img/html.png'
import perfil from '../img/perfil.jpg'


const Sobre = () => {
  return (
    
  <div className= 'sobreall' >
   <div className = 'position'>
     <div className = 'sobreTitle'><h3>Sobre</h3></div>
     <div className = 'sobre'>
     <div className = 'perfil'>
       <div className = 'perfilcontent'>
         <img className='perfilimg' src={perfil} alt="" />
         <div className = 'mascaratext'>
           <h8>Oque estou aprendendo?</h8>
           <h9>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, 
             inteiris.Casamentiss faiz malandris se pirulitá.Posuere libero varius.
              Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</h9>
         </div>
       </div>
      </div>





     <div className = 'posicionarConteudo'>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {reactimg}></img>
          <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          <h5>Design Responsivo, minhas aplicações funcionam em mobile, pc e outros dispositivos</h5>
        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {javascript}></img>
          <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          <h5>Sempre buscando por novas tecnologias e aplicando em meus projetos.</h5>
         

        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {html}></img>
          <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          <h5>Websites não precisam ser estaticos, amo dar vida a eles..</h5>
        </div>
        <div className = 'conteudo'>
          <img className = 'conteudoimage' src = {html}></img>
          <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          <h5>Websites não precisam ser estaticos, amo dar vida a eles..</h5>
        </div>
      </div>
   
    
     </div>
    
 

     </div>
  </div>
  )
}

export default Sobre