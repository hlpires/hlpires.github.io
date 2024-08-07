import React, { useState, useEffect, useRef } from 'react'
import backend from '../img/backend.png'
import frontend from '../img/frontend.png'
import ferramentas from '../img/ferramentas.png'
import art from '../img/art.png'
import Modal from './Modal'
import Aos from 'aos'
import lamp from '../img/lamp.png'
import firefly from './vagalume.png'
import Lottie from "lottie-react"
import animation from "../assets/Animation.json"
import 'aos/dist/aos.css'

const Sobre = (props) => {

  const animationRef = useRef()
  // const canvasRef = useRef();
  // const canvasRef1 = useRef();
  // const fireFlyArr = []
  // const enemyImage = new Image();
  // enemyImage.src = firefly

  // useEffect(() => {

  //   let gameFrame = 0
  //   const ctx = canvasRef.current.getContext("2d");
  //   const ctx1 = canvasRef.current.getContext("2d");

  //   class Enemy {
  //     constructor() {
  //       this.spriteWidth = 65
  //       this.spriteHeight = 54
  //       this.width = (this.spriteWidth / 1);
  //       this.height = this.spriteHeight / 2;
  //       this.x = Math.random() * 20 + 2;
  //       this.y = Math.random() * 80
  //       this.speed = Math.random() * 2 - 4;
  //       this.frame = 0;
  //       this.flapSpeed = Math.floor(Math.random() * 16 + 10);
  //       this.angle = Math.random() * 300
  //       this.angleSpeed = Math.random() * 0.05 + 0.1
  //       this.curve = Math.random() * 300 + 20
  //     }
  //     update() {
  //       this.x = 60 * Math.sin(this.angle * Math.PI / 20) + (300 / 2 - this.width / 2)
  //       this.y = 50 * Math.sin(this.angle * Math.PI / 120) + (160 / 2 - this.height / 2)
  //       this.y += 1 * Math.sin(this.angle)
  //       this.angle += this.angleSpeed

  //       if (gameFrame % this.flapSpeed === 0)
  //         this.frame > 4 ? this.frame = 0 : this.frame++
  //     }
  //     draw() {
  //       ctx1.fillRect(this.x, this.y, this.width, this.height)
  //       ctx1.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  //     }
  //   }
  //   class Enemy1 {
  //     constructor() {
  //       this.spriteWidth = 67
  //       this.spriteHeight = 54
  //       this.width = (this.spriteWidth / 1);
  //       this.height = (this.spriteHeight / 2) - 5;
  //       this.x = Math.random() * 20 + 2;
  //       this.y = Math.random() * 80
  //       this.speed = Math.random() * 2 - 4;
  //       this.frame = 0;
  //       this.flapSpeed = Math.floor(Math.random() * 16 + 10);
  //       this.angle = Math.random() * 300
  //       this.angleSpeed = 0.03
  //       this.curve = Math.random() * 300 + 20
  //     }
  //     update() {
  //       this.x = 60 * Math.sin(this.angle * Math.PI / 20) + (300 / 2 - this.width / 2)
  //       this.y = 50 * Math.sin(this.angle * Math.PI / 120) + (160 / 2 - this.height / 2)
  //       this.y += 1 * Math.sin(this.angle)
  //       this.angle += this.angleSpeed

  //       if (gameFrame % this.flapSpeed === 0)
  //         this.frame > 4 ? this.frame = 0 : this.frame++
  //     }
  //     draw() {
  //       ctx1.fillRect(this.x, this.y, this.width, this.height)
  //       ctx1.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  //     }
  //   }
  //   for (let i = 0; i < 2; i++) {
  //     fireFlyArr.push(new Enemy())
  //   }
  //   for (let i = 0; i < 3; i++) {
  //     fireFlyArr.push(new Enemy1())
  //   }

  //   function animate() {
  //     ctx.fillStyle = "rgba(0,0,0,0)";
  //     ctx.clearRect(0, 0, 2000, 200)
  //     ctx1.fillStyle = "rgba(0,0,0,0)";
  //     ctx1.clearRect(0, 0, 2000, 200)
  //     fireFlyArr.map((fly) => {
  //       fly.update();
  //       fly.draw();
  //     })
  //     gameFrame++
  //     requestAnimationFrame(animate)
  //   }
  //   // a
  //   animate()
  // }, [])

  // useEffect(() => {
  //   Aos.init({ duration: 1000 })
  // }, [])

  const [nativeLanguage, setNativeLanguage] = useState(true)

  useEffect(() => {
    setNativeLanguage(props.location)
  }, [props.location]);


  const [openModal, setOpenModal] = useState(false)

  return (

    <div className='sobreall' id='sobre' >
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className='position' style={{ position: 'relative' }}>
        <div className='headerTextMobile'>
          <div style={{ width: "100vw", display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div className='headerArt'></div>
          </div>
          <h1 style={{ marginTop: "50px" }}>Higor Pires</h1>
          <h1 id='h1S'>Full stack Developer</h1>
          <div className='socialMediaBox'>
            <a href='https://github.com/hlpires'><div className='socialMedia' id='socialMedia1'></div></a>
            <a href='https://www.linkedin.com/in/higor-piresdev/'><div className='socialMedia' id='socialMedia3'></div></a>
            {/* <Link spy={true} smooth={true} offset={50} duration={500}><div className = 'socialMedia' id = 'socialMedia3'></div></Link> */}
          </div>
        </div>
        <div className='sobreTitle'><h6>{nativeLanguage ? "Sobre" : "About"}</h6></div>
        <div className='sobre'>
          {/* <canvas className='fireflyShow' ref={canvasRef} style={{ position: 'absolute', width: '180px', height: '23%', top: '10px', right: '20px', zIndex: 7 }} id="canvas1"></canvas>
          <canvas className='fireflyShow' ref={canvasRef1} style={{ position: 'absolute', width: '180px', height: '23%', top: '10px', right: '20px', zIndex: 7 }} id="canvas2"></canvas> */}
          {/* <img className='fireflyShow' src={lamp} style={{ position: 'absolute', right: '20px', top: '20px', width: '170px', filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 1.1))', zIndex: 6 }} /> */}
          <div className='sobreText' style={{ zIndex: 4, marginBottom: "80px", }}>
            <div style={{ width: "460px", marginLeft: "140px", marginBottom: "-60px", marginTop: "180px", zIndex: "10  !important" }}>
              <Lottie
                height={10}
                size={10}
                width={10}
                lottieRef={animationRef}
                animationData={animation} />
            </div>
            <div className='text' style={{ zIndex: "10" }}>
              <h3 style={{ fontSize: "24px", color: "rgb(7, 176, 255)" }}> {nativeLanguage ? "Olá eu sou Higor" : "Hello, I am Higor"}</h3>
              <h2 style={{ fontWeight: "bold", lineHeight: '1.2' }}>
                {nativeLanguage ? " desenvolvedor Full Stack com 5 anos de experiência em desenvolvimento web desde 2019. Busco superar expectativas, desafiando-me a aprender e crescer continuamente. Estou pronto para contribuir com dedicação e criatividade para o sucesso do seu próximo projeto."
                  : "Full Stack developer with 5 years of experience in web development since 2019. I strive to exceed expectations, challenging myself to learn and grow continuously. I am ready to contribute with dedication and creativity to the success of your next project."}
              </h2>
            </div>
            {/* <div className='curriculo' onClick={() => setOpenModal(true)}><p style={{ alignSelf: 'center', marginBottom: '5px' }}>Curriculo</p></div> */}
          </div>
          <div className='posicionarConteudo' style={{ zIndex: 4 }}>
            <div className='conteudo' id='conteudo1' style={{ marginTop: '0.5%' }}>
              <img className='conteudoimage' src={frontend}></img>
              <h4 style={{ color: "rgb(7, 176, 255)" }}>Front-End</h4>
              <h5>HTML, CSS, Javascript, React, Next.JS </h5>
            </div>
            <div className='conteudo' id='conteudo2' style={{ marginTop: '3%' }}>
              <img className='conteudoimage' src={backend}></img>
              <h4 style={{ color: "rgb(7, 176, 255)" }}>Back-End</h4>
              <h5>Node Js, MongoDB</h5>


            </div>
            <div className='conteudo' id='conteudo3' style={{ marginTop: '3%' }}>
              <img className='conteudoimage' src={ferramentas}></img>
              <h4 style={{ color: "rgb(7, 176, 255)" }}>{nativeLanguage ? "Ferramentas" : "Tools"}</h4>
              <h5>Figma, Photoshop, Git, Github</h5>
            </div>

          </div>


        </div>



      </div>
    </div >
  )
}

export default Sobre