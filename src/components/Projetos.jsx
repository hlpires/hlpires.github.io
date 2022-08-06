import React,{useState}from 'react'
import animal from '../img/animal.png'
import code from '../img/code.png'
import play from '../img/play.png'
import esports from '../img/cslogo.png'
import comercio from '../img/comercio.png'
import ModalEcommerce from './ModalEcommerce'


const Projetos = () => {

  const[modalEcommerce,setModalEcommerce] = useState(false)

  return (
    
    <div  className = 'projetos'>
      
        <div className = 'position'>
        <div className = 'sobreTitle'><h6>Projetos</h6></div>
           <div className = 'projetosPosition'>
           <div className = 'projetosBox1'>
           
             
             <div className = 'imgButtonBox'>
             <img src={comercio} onClick = {() =>{setModalEcommerce(true)}} alt="" className='projetosImg' alt=""/>
               <a href = 'https://github.com/hlpires/ecommerceapp'>
                 <div className ='buttonImg'>

               <img className = 'buttonIcon' alt=""  src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>
               <a href ='https://ecommerceapp-j6x585omo-hlpires.vercel.app/'><div className ='buttonImg1'>
               <img className = 'buttonIcon' alt=""  src = {play}></img>
                 <div className = 'buttonImgText'>
                   Demo
                 </div>
               </div></a>
             </div>
           </div>
           <div className = 'projetosBox'>
             
             <div className = 'imgButtonBox'>
               <img src={animal} className='projetosImg' alt=""  alt=""/>
               <a href = 'https://github.com/hlpires/reinoAnimalProject'><div className ='buttonImg2'>

               <img className = 'buttonIcon' alt=""  src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>
               <a href ='https://hlpires.github.io/reinoAnimalProject/'><div className ='buttonImg3'>
               <img className = 'buttonIcon' alt=""  src = {play}></img>
                 <div className = 'buttonImgText'>
                   Demo
                 </div>
               </div></a>
             </div>
           </div> 
            
           <div className = 'projetosBox'>            
             <div className = 'imgButtonBox'>
               <img src={esports} className='projetosImg' alt=""  alt=""/>
               <a href = 'https://github.com/hlpires/CsgoNews'><div className ='buttonImg2'>
                 <img className = 'buttonIcon' alt=""   src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>

             </div>
             
           </div>
           </div>         
        </div>
        <ModalEcommerce open={modalEcommerce} onClose={() => setModalEcommerce(false)}/>
    </div>
  )
}

export default Projetos