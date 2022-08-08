import React, { useRef,useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import wpp from '../img/wpp.png'
import {Toaster,toast} from 'react-hot-toast'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contato = () => {


  useEffect(()=> {

    Aos.init({ duration:1000})

  },[])


    const form = useRef();
    const [email, setEmail] = useState('');
    
    


    const sendEmail = (e) => {
        e.preventDefault();
        if(email.length === 0){
        toast("Preencha os dados corretamente")
        
        }else{
        toast("Email - enviado")
        
        }
    
        emailjs.sendForm('service_n2gylsj', 'template_d05z4jm', form.current, 'MTKoAO6h6Sg8k4bQP')
          .then((result) => {
              console.log(result.text);
              
              
          }, (error) => {
              console.log(error.text);
          }); e.target.reset()


      };






  return (


    <div className = 'contato'>
      
        <div className ='position'>
          <div className = 'sobreTitle'><h6>Contato</h6></div>

          <div data-aos = 'fade-right' className = 'email'>
            <form ref={form} onSubmit={sendEmail}>
      
             <input className='nomeInput' type="text" placeholder= 'Nome'name="user_name" />
     
             <input className='emailInput' onChange = {event => setEmail(event.target.value)} type="email" placeholder= 'Seu Email' name="user_email" />
      
             <textarea className='messageInput' name="message" placeholder= 'Menssagem' />
             <input className='buttonInput' type="submit" value="Enviar" />
             </form>
           </div>

           <div data-aos = 'fade-right' className = 'telefones'>
               <div className = 'telefoneText'>Celular:</div>
               <div className ='celular'>11970127930</div>
               <div className = 'telefoneText'>Email:</div>
               <div className = 'endereço'>higorlpires2@gmail.com</div>
               <div className ='wppButton'>
                 <a href = 'https://api.whatsapp.com/send?phone=5511970127930'><img className = 'contatowpp'  src={wpp} alt="" /></a>
               </div>
               <div className = 'socialMediaBox1'>

              <div className = 'socialMedia1' id = 'socialMedia1'></div>
             {/*  <div className = 'socialMedia1' id = 'socialMedia2'></div> */}
              <div className = 'socialMedia1' id = 'socialMedia3'></div>

              </div>   

           </div>
        </div>
        <Toaster/>
    </div>
  )
}

export default Contato