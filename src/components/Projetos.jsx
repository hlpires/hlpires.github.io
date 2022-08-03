import React from 'react'
import animal from '../img/animal.png'
import code from '../img/code.png'
import play from '../img/play.png'
import esports from '../img/cslogo.png'
import comercio from '../img/comercio.png'
const Projetos = () => {
  return (
    <div  className = 'projetos'>
        <div className = 'position'>
        <div className = 'sobreTitle'><h6>Projetos</h6></div>
           <div className = 'projetosPosition'>
           <div className = 'projetosBox1'>
             
             
             <div className = 'imgButtonBox'>
             <img src={comercio} className='projetosImg' alt=""/>
               <a href = 'https://github.com/hlpires/ecommerceapp'>
                 <div className ='buttonImg'>

               <img className = 'buttonIcon' src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>
               <a href ='https://ecommerceapp-9ong507ot-hlpires.vercel.app/'><div className ='buttonImg1'>
               <img className = 'buttonIcon' src = {play}></img>
                 <div className = 'buttonImgText'>
                   Demo
                 </div>
               </div></a>
             </div>
           </div>
           <div className = 'projetosBox'>            
             <div className = 'imgButtonBox'>
               <img src={esports} className='projetosImg' alt=""/>
               <a href = 'https://github.com/hlpires/CsgoNews'><div className ='buttonImg2'>
                 <img className = 'buttonIcon'  src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>
               <a href ='https://hlpires.github.io/CsgoNews/'><div className ='buttonImg3'>
               <img className = 'buttonIcon' src = {play}></img>
                 <div className = 'buttonImgText'>
                    Demo
                 </div>
               </div></a>
             </div>
             
           </div>

           <div className = 'projetosBox'>
             
             <div className = 'imgButtonBox'>
               <img src={animal} className='projetosImg' alt=""/>
               <a href = 'https://github.com/hlpires/reinoAnimalProject'><div className ='buttonImg2'>

               <img className = 'buttonIcon' src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>
               <a href ='https://hlpires.github.io/reinoAnimalProject/'><div className ='buttonImg3'>
               <img className = 'buttonIcon' src = {play}></img>
                 <div className = 'buttonImgText'>
                   Demo
                 </div>
               </div></a>
             </div>
           </div>  
           
           </div>



           

           



           
           
        </div>
    </div>
  )
}

export default Projetos