import React,{useState} from 'react'
import backend from '../img/backend.png'
import frontend from '../img/frontend.png'
import ferramentas from '../img/ferramentas.png'
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
          <img className = 'conteudoimage'  src = {frontend}></img>
          <h4>Front-End</h4>
          <h5>HTML, CSS, Javascript, React </h5>
        </div>
        <div className = 'conteudo' id = 'conteudo2'>
          <img className = 'conteudoimage'  src = {backend}></img>
          <h4>Back-End</h4>
          <h5>Node Js, MongoDB</h5>
         

        </div>
        <div className = 'conteudo' id = 'conteudo3'>
          <img className = 'conteudoimage' src = {ferramentas}></img>
          <h4>Ferramentas</h4>
          <h5>Figma, Photoshop, Git, Github</h5>
        </div>
      
      </div>
   
    
     </div>
    
 

     </div>
  </div>
  )
}

export default Sobre