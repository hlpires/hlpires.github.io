import React,{useState,useEffect} from 'react'
import 'animate.css';
import {Link} from 'react-scroll'
const Header = () => {

  const [visivel,setVisivel] = useState('none')

  const style = {
    display: visivel
  }

  useEffect(() => {

    setTimeout(()=>{
    setVisivel('flex')}, 1500)

  },[])

  
  return (
    <div className = 'header'>
      <div style = {style} className = 'menu'>
        <div className = 'menuPosition'>
        <div className = 'menuText'><Link to="sobre" spy={true} smooth={true} offset={50} duration={500}>Sobre</Link></div>
        <div className = 'menuText'><Link to="projetos" spy={true} smooth={true} offset={50} duration={500}>Projetos</Link></div>
        <div className = 'menuText'><Link to="contato" spy={true} smooth={true} offset={50} duration={500}>Contato</Link></div>
        </div>
      </div>
      <div style = {style} className = 'set'>
      
         <div className = 'headerText'>
         <h1 className= 'animate__animated animate__lightSpeedInLeft'>Higor Pires</h1>
         <h1 id='h1S' className= 'animate__animated animate__lightSpeedInLeft'>Full stack Devoloper</h1>
         <div className = 'socialMediaBox'>

          <div className = 'socialMedia' id = 'socialMedia1'></div>
          <div className = 'socialMedia' id = 'socialMedia2'></div>
          <div className = 'socialMedia' id = 'socialMedia3'></div>

          </div>   
 
        </div>
 
        </div>
    </div>
  )
}

export default Header