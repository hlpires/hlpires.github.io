import React,{useState} from 'react'
import reactimg from '../img/react.png'
import javascript from '../img/javascript.png'
import html from '../img/html.png'
import perfil from '../img/perfil.jpg'
import art from '../img/art.png'
import Modal from './Modal'

const Sobre = () => {
  
  const [openModal,setOpenModal] = useState(false)

  return (
    
  <div className= 'sobreall' id='sobre' >
   <div className = 'position'>
     <div className = 'sobreTitle'><h6>Sobre</h6></div>
     <div className = 'sobre'>
       <div className = 'sobreText'>
         <img src={art}  className = 'art' alt="" />

         <div className = 'text'>
           
         <h3>Olá eu sou Higor</h3>
         <h2>Sou um Full Stack Devoloper, atuo no desenvolvimento web desde 2019. Sempre estou aprendendo tecnologias novas e aplicando em meus projetos </h2>
            
            
            </div>
            <div className = 'curriculo' onClick = {() => setOpenModal(true)}>Curriculo</div>
            <Modal open={openModal} onClose={() => setOpenModal(false)}/>
       </div>
       
     





     <div className = 'posicionarConteudo'>
        <div className = 'conteudo' id = 'conteudo1'>
          <img className = 'conteudoimage'  src = {reactimg}></img>
          <h4>React</h4>
          <h5>cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor</h5>
        </div>
        <div className = 'conteudo' id = 'conteudo2'>
          <img className = 'conteudoimage'  src = {javascript}></img>
          <h4>Javascript</h4>
          <h5>cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor</h5>
         

        </div>
        <div className = 'conteudo' id = 'conteudo3'>
          <img className = 'conteudoimage' src = {html}></img>
          <h4>HTML / CSS</h4>
          <h5>cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor</h5>
        </div>
      
      </div>
   
    
     </div>
    
 

     </div>
  </div>
  )
}

export default Sobre