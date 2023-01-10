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
          <div className = 'menuHeader'>
        <div className = 'menuText'><Link to="sobre" spy={true} smooth={true} offset={50} duration={500}>Sobre</Link></div>
        <div className = 'menuText'><Link to="projetos" spy={true} smooth={true} offset={50} duration={500}>Projetos</Link></div>
        <div className = 'menuText'><Link to="contato" spy={true} smooth={true} offset={50} duration={500}>Contato</Link></div>
        </div>
        </div>
      </div>
      <div style = {style} className = 'set'>
      
         <div className = 'headerText'>
         <div className='headerArt'></div>
         <h1>Higor Pires</h1>
         <h1 id='h1S'>Full stack Devoloper</h1>
         <div className = 'socialMediaBox'>
         <a href = 'https://github.com/hlpires'><div className = 'socialMedia' id = 'socialMedia1'></div></a>
         <a href = 'https://github.com/hlpires'><div className = 'socialMedia' id = 'socialMedia3'></div></a>
          <Link to="contato" spy={true} smooth={true} offset={500} duration={1100}> <div className = 'socialMedia' id = 'socialMedia2'> </div></Link>
         {/* <Link spy={true} smooth={true} offset={50} duration={500}><div className = 'socialMedia' id = 'socialMedia3'></div></Link> */}
          </div>   
         <div className = 'buttonHeader'>
          <p style ={{alignSelf:'center'}}> <Link to="contato" spy={true} smooth={true} offset={50} duration={1200}>Ver mais</Link></p>
         </div>
        </div>
     
 
        </div>
    </div>
  )
}

export default Header