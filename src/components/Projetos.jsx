import React,{useState,useEffect}from 'react'
import animal from '../img/animal.png'
import code from '../img/code.png'
import play from '../img/play.png'
import esports from '../img/cslogo.png'
import comercio from '../img/banner1.png'
import ModalEcommerce from './ModalEcommerce'
import ModalReino from './ModalReino'
import ModalEsports from './ModalEsports'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { width } from 'dom-helpers'

const Projetos = () => {

  const[modalEcommerce,setModalEcommerce] = useState(false)
  const[modalEsports,setModalEsports] = useState(false)
  const[modalReino,setModalReino] = useState(false)

  useEffect(()=> {

    Aos.init({ duration:1000})

  },[])

  return (
    <div>
   {/* <div  className = 'projetos'>
      
        <div className = 'position'>
        <div className = 'sobreTitle'><h6>Projetos</h6></div>
           <div className = 'projetosPosition'>
           <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBox1'>
           
             
             <div className = 'imgButtonBox'>
             <img src={comercio} onClick = {() =>{setModalEcommerce(true)}} alt="" className='projetosImg' alt=""/>      
             </div>
           </div>
           <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBoxArt'>
           
             
           
         </div>
           
            
           <div  data-aos = 'fade-right' className = 'projetosBox' id = 'projetosbox'>            
             <div className = 'imgButtonBox'>
               <img src={esports} onClick = {() =>{setModalEsports(true)}} className='projetosImg' alt=""  alt=""/>
          

             </div>
             
           </div>
           <div  data-aos = 'fade-right' className = 'projetosBox'>
             
             <div  className = 'imgButtonBox'>
               <img src={animal} onClick = {() =>{setModalReino(true)}} className='projetosImg' alt=""  alt=""/>
             
             </div>
           </div> 
           </div>         
        </div>
        
        <ModalEcommerce open={modalEcommerce} onClose={() => setModalEcommerce(false)}/>
        <ModalReino open={modalReino} onClose={() => setModalReino(false)}/>
        <ModalEsports open={modalEsports} onClose={() => setModalEsports(false)}/>
  </div> */}

    <div  className = 'projetos'>
      
      <div className = 'position'>
      <div className = 'sobreTitle'><h6>Projetos</h6></div>
         <div className = 'projetosPosition'  onClick = {() =>{setModalEcommerce(true)}}>
         <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBox1'>
         <p className = 'projetosTextContent'>Safire</p>
         <p className = 'projetosTextContent2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
         </div>
         <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBoxArt'>
         <div className = 'imageContent' ></div>
         </div>
         
         </div>
         <div className = 'projetosPosition' onClick = {() =>{setModalEsports(true)}}>
         <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBox1'>
         <p className = 'projetosTextContent'>Safire</p>
         <div style={{border:'1px solid red',width:'90%',height:'60px',marginLeft:'5%',display:'flex'}}>
           <p style = {{alignSelf:'center',fontSize:'30px',fontFamily:'fantasy',color:'white'}}>Técnologia:</p>
           <div style = {{width:'60px',height:'100%',border:'1px solid red',alignSelf:'center',
          marginLeft:'2%'}}></div>
            <div style = {{width:'60px',height:'100%',border:'1px solid red',alignSelf:'center',
          marginLeft:'2%'}}></div>
            <div style = {{width:'60px',height:'100%',border:'1px solid red',alignSelf:'center',
          marginLeft:'2%'}}></div>
            <div style = {{width:'60px',height:'100%',border:'1px solid red',alignSelf:'center',
          marginLeft:'2%'}}></div>
         </div>
         <p className = 'projetosTextContent2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
         </div>
         <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBoxArt'>
         <div className = 'imageContent'></div>
         </div>
         
         </div>
   
         <div className = 'projetosPosition' onClick = {() =>{setModalReino(true)}}>
         <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBox1'>
         <p className = 'projetosTextContent'>Safire</p>
         <p className = 'projetosTextContent2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
         </div>
         <div data-aos = 'fade-right' className = 'projetosBox' id ='projetosBoxArt'>
         <div className = 'imageContent'></div>
         </div>
         </div> 
      </div>
      
      
      <ModalEcommerce open={modalEcommerce} onClose={() => setModalEcommerce(false)}/>
      <ModalReino open={modalReino} onClose={() => setModalReino(false)}/>
      <ModalEsports open={modalEsports} onClose={() => setModalEsports(false)}/>
  </div>
    </div>
  )
}

export default Projetos