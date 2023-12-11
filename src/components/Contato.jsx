import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import wpp from '../img/wpp.png'
import { Toaster, toast } from 'react-hot-toast'
import Aos from 'aos'
import 'aos/dist/aos.css'
import lamp from '../img/lamp.png'
import firefly from './vagalume.png'

const Contato = (props) => {

  const canvasRef = useRef();
  const canvasRef1 = useRef();
  const fireFlyArr = []
  const enemyImage = new Image();

  enemyImage.src = firefly

  useEffect(() => {

    let gameFrame = 0
    const ctx = canvasRef.current.getContext("2d");
    const ctx1 = canvasRef.current.getContext("2d");

    class Enemy {
      constructor() {
        this.spriteWidth = 65
        this.spriteHeight = 54
        this.width = (this.spriteWidth / 1);
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * 20 + 2;
        this.y = Math.random() * 80
        this.speed = Math.random() * 2 - 4;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 16 + 10);
        this.angle = Math.random() * 300
        this.angleSpeed = Math.random() * 0.05 + 0.1
        this.curve = Math.random() * 300 + 20
      }
      update() {
        this.x = 60 * Math.sin(this.angle * Math.PI / 20) + (300 / 2 - this.width / 2)
        this.y = 50 * Math.sin(this.angle * Math.PI / 120) + (160 / 2 - this.height / 2)
        this.y += 1 * Math.sin(this.angle)
        this.angle += this.angleSpeed

        if (gameFrame % this.flapSpeed === 0)
          this.frame > 4 ? this.frame = 0 : this.frame++
      }
      draw() {
        ctx1.fillRect(this.x, this.y, this.width, this.height)
        ctx1.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
      }
    }
    class Enemy1 {
      constructor() {
        this.spriteWidth = 67
        this.spriteHeight = 54
        this.width = (this.spriteWidth / 1);
        this.height = (this.spriteHeight / 2) - 5;
        this.x = Math.random() * 20 + 2;
        this.y = Math.random() * 80
        this.speed = Math.random() * 2 - 4;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 16 + 10);
        this.angle = Math.random() * 300
        this.angleSpeed = 0.03
        this.curve = Math.random() * 300 + 20
      }
      update() {
        this.x = 60 * Math.sin(this.angle * Math.PI / 20) + (300 / 2 - this.width / 2)
        this.y = 50 * Math.sin(this.angle * Math.PI / 120) + (160 / 2 - this.height / 2)
        this.y += 1 * Math.sin(this.angle)
        this.angle += this.angleSpeed

        if (gameFrame % this.flapSpeed === 0)
          this.frame > 4 ? this.frame = 0 : this.frame++
      }
      draw() {
        ctx1.fillRect(this.x, this.y, this.width, this.height)
        ctx1.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
      }
    }
    for (let i = 0; i < 2; i++) {
      fireFlyArr.push(new Enemy())
    }
    for (let i = 0; i < 3; i++) {
      fireFlyArr.push(new Enemy1())
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.clearRect(0, 0, 2000, 200)
      ctx1.fillStyle = "rgba(0,0,0,0)";
      ctx1.clearRect(0, 0, 2000, 200)
      fireFlyArr.map((fly) => {
        fly.update();
        fly.draw();
      })
      gameFrame++
      requestAnimationFrame(animate)
    }
    // a
    animate()
  }, [])

  useEffect(() => {

    Aos.init({ duration: 1000 })

  }, [])


  const form = useRef();
  const [email, setEmail] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast("Preencha os dados corretamente")

    } else {
      toast("Email - enviado")

    }

    emailjs.sendForm('service_n2gylsj', 'template_d05z4jm', form.current, 'MTKoAO6h6Sg8k4bQP')
    console.log(form)
      .then((result) => {
        console.log(result.text);


      }, (error) => {
        console.log(error.text);
      }); e.target.reset()


  };




  const [nativeLanguage, setNativeLanguage] = useState(true)

  useEffect(() => {
    setNativeLanguage(props.location)
  }, [props.location]);


  return (


    <div className='contato' id='contato'>

      <div className='position' style={{ position: 'relative' }}>
        <canvas className='fireflyShow' ref={canvasRef} style={{ position: 'absolute', width: '180px', height: '220px', top: '10px', right: '20px', zIndex: 7 }} id="canvas1"></canvas>
        <canvas className='fireflyShow' ref={canvasRef1} style={{ position: 'absolute', width: '180px', height: '23%', top: '10px', right: '20px', zIndex: 7 }} id="canvas2"></canvas>
        <img className='fireflyShow' src={lamp} style={{ position: 'absolute', right: '20px', top: '-10px', width: '170px', zIndex: 6, filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 1.1))' }} />
        <div style={{ zIndex: 4, position: "relative" }} className='sobreTitle'><h6> {nativeLanguage ? "Contato" : "Contact"}</h6></div>

        <div data-aos='fade-right' className='email' style={{ zIndex: 4, position: "relative" }}>
          <form ref={form} onSubmit={sendEmail} >

            <input className='nomeInput' type="text" placeholder={nativeLanguage ? 'Nome' : "Name"} name="user_name" />

            <input className='emailInput' onChange={event => setEmail(event.target.value)} type="email" placeholder='Email' name="user_email" />

            <textarea className='messageInput' name="message" placeholder={nativeLanguage ? 'Menssagem' : "Message"} />
            <input className='buttonInput' type="submit" value={nativeLanguage ? 'Enviar' : "Send"} />
          </form>
        </div>

        <div data-aos='fade-right' className='telefones' style={{ zIndex: 4, position: "relative" }}>
          <div className='telefoneText'>{nativeLanguage ? "Celular:" : "mobile phone:"}</div>
          <div className='celular'>11970127930</div>
          <div className='telefoneText'>Email:</div>
          <div className='endereço'>higorlpires@gmail.com</div>

        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Contato