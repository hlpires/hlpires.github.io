import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contato = () => {


    const form = useRef();





    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n2gylsj', 'template_d05z4jm', form.current, 'MTKoAO6h6Sg8k4bQP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };






  return (


    <div className = 'contato'>
        <div className = 'position'>
          <div className = 'sobreTitle'><h6>Contato</h6></div>

          <div className = 'email'>
            <form ref={form} onSubmit={sendEmail}>
      
             <input className='nomeInput' type="text" placeholder= 'Nome'name="user_name" />
     
             <input className='emailInput' type="email" placeholder= 'Seu Email' name="user_email" />
      
             <textarea className='messageInput' name="message" placeholder= 'Menssagem' />
             <input className='buttonInput' type="submit" value="Send" />
             </form>
           </div>

           <div className = 'telefones'>
               <div className = 'telefoneText'>Celular:</div>
               <div className ='celular'>11970127930</div>
               <div className = 'telefoneText'>Email:</div>
               <div className = 'endereço'>higorlpires2@gmail.com</div>
               <div className ='wppButton'></div>

           </div>
        </div>
        
    </div>
  )
}

export default Contato