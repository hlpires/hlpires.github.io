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
          
    <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" placeholder= 'Nome'name="user_name" />
     
      <input type="email" placeholder= 'Seu Email' name="user_email" />
      
      <textarea name="message" placeholder= 'Menssagem' />
      <input type="submit" value="Send" />
    </form>
        </div>
        
    </div>
  )
}

export default Contato