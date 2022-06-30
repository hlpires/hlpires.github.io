import React from 'react'
import logoReino from '../img/reinoAnimalLogo.png'
const Projetos = () => {
  return (
    <div  className = 'projetos'>
        <div className = 'position'>
           <div className = 'sobreTitle'><h3>Projetos</h3></div>
           <div className = 'projetosPosition'>
           <div className = 'projetosBox'>
             <img src={logoReino} className='projetosImg' alt="" />
           </div>
           <div className = 'projetosBox'></div>
           </div>
        </div>
    </div>
  )
}

export default Projetos