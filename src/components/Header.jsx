import React from 'react'
import 'animate.css';
const Header = () => {
  return (
    <div className = 'header'>
      <div className = 'menu'>
        <div className = 'menuPosition'>
        <div className = 'menuText'>Sobre</div>
        <div className = 'menuText'>projetos</div>
        <div className = 'menuText'>contato</div>
        </div>
      </div>
      <div className = 'set'>
      
         <div className = 'headerText'>
         <h1 className= 'animate__animated animate__lightSpeedInLeft'>Full stack Devoloper</h1>

            
        </div>
        <div className ='button'>
          <h3>Sobre Mim</h3>

        </div>
        </div>
    </div>
  )
}

export default Header