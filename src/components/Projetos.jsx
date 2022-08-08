import React,{useState,useEffect}from 'react'
import animal from '../img/animal.png'
import code from '../img/code.png'
import play from '../img/play.png'
import esports from '../img/cslogo.png'
import comercio from '../img/comercio.png'
import ModalEcommerce from './ModalEcommerce'
import ModalReino from './ModalReino'
import ModalEsports from './ModalEsports'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projetos = () => {

  const[modalEcommerce,setModalEcommerce] = useState(false)
  const[modalEsports,setModalEsports] = useState(false)
  const[modalReino,setModalReino] = useState(false)

  useEffect(()=> {

    Aos.init({ duration:1000})

  },[])

  return (
    
    <div  className = 'projetos'>
      
        <div className = 'position'>
        <div className = 'sobreTitle'><h6>Projetos</h6></div>
           <div className = 'projetosPosition'>
           <div data-aos = 'fade-right' className = 'projetosBox1'>
           
             
             <div className = 'imgButtonBox'>
             <img src={comercio} onClick = {() =>{setModalEcommerce(true)}} alt="" className='projetosImg' alt=""/>      
             </div>
           </div>
           <div  data-aos = 'fade-right' className = 'projetosBox'>
             
             <div  className = 'imgButtonBox'>
               <img src={animal} onClick = {() =>{setModalReino(true)}} className='projetosImg' alt=""  alt=""/>
             
             </div>
           </div> 
            
           <div  data-aos = 'fade-right' className = 'projetosBox' id = 'projetosbox'>            
             <div className = 'imgButtonBox'>
               <img src={esports} onClick = {() =>{setModalEsports(true)}} className='projetosImg' alt=""  alt=""/>
          

             </div>
             
           </div>
           </div>         
        </div>
        <ModalEcommerce open={modalEcommerce} onClose={() => setModalEcommerce(false)}/>
        <ModalReino open={modalReino} onClose={() => setModalReino(false)}/>
        <ModalEsports open={modalEsports} onClose={() => setModalEsports(false)}/>
    </div>
  )
}

export default Projetos