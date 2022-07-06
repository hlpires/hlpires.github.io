import React from 'react'
import animal from '../img/animal.png'
import cruzeiro from '../img/cruzeiro.png'
const Projetos = () => {
  return (
    <div  className = 'projetos'>
        <div className = 'position'>
        <div className = 'sobreTitle'><h6>Projetos</h6></div>
           <div className = 'projetosPosition'>
           <div className = 'projetosBox'>
             <div className = 'projetosSkillsBox'>
               <div className = 'projetosSkills'>
                 <img className = 'projetosSkillsImg'></img>
                 <div className = 'projetosText'> </div>

               </div>
             </div>
             <img src={animal} className='projetosImg' alt="" />
           </div>
           <div className = 'projetosBox'>
             <div className = 'projetosSkillsBox'>
               <div className = 'projetosSkills'>
                 <img className = 'projetosSkillsImg'></img>
                 <div className = 'projetosText'> </div>

               </div>
             </div>
             <img src={animal} className='projetosImg' alt=""/>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Projetos