import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import firefly from './vagalume.png'
import firefly1 from './maior.png'
import arbust from './arbust.png'
import eua from "../img/eua.png"
import brasil from "../img/brasil.png"

const Header = (props) => {

  const [visivel, setVisivel] = useState('none')
  const [nativeLanguage, setNativeLanguage] = useState(true)
  const canvasRef = useRef();
  const canvasRef1 = useRef();
  const canvasRef2 = useRef();
  const canvasRef3 = useRef();
  const canvasRef4 = useRef();
  const style = {
    display: visivel,

  }
  const fireFlyArr = []
  const enemyImage = new Image();
  enemyImage.src = firefly
  const enemyImage1 = new Image();
  enemyImage1.src = firefly1

  let gameFrame = 0

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const ctx1 = canvasRef1.current.getContext("2d");
    const ctx2 = canvasRef2.current.getContext("2d");
    const ctx3 = canvasRef3.current.getContext("2d");
    const ctx4 = canvasRef3.current.getContext("2d");

    setTimeout(() => {
      setVisivel('flex')
    }, 1500)

    class Enemy {
      constructor() {
        this.spriteWidth = 65
        this.spriteHeight = 54
        this.width = (this.spriteWidth / 3);
        this.height = this.spriteHeight / 3;
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
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
      }
    }

    class Enemy2 {
      constructor() {
        this.spriteWidth = 65
        this.spriteHeight = 54
        this.width = (this.spriteWidth / 3);
        this.height = this.spriteHeight / 3;
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
        ctx2.fillRect(this.x, this.y, this.width, this.height)
        ctx2.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
      }
    }
    class Enemy4 {
      constructor() {
        this.spriteWidth = 65
        this.spriteHeight = 54
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        this.x = Math.random() * 280 + 20;
        this.y = Math.random() * 80
        this.speed = Math.random() * 2 - 4;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 16 + 10);
        this.angle = Math.random() * 300
        this.angleSpeed = 0.03
        this.curve = Math.random() * 300 + 20
      }
      update() {
        this.x = 70 * Math.sin(this.angle * Math.PI / 25) + (300 / 2 - this.width / 2)
        this.y = 60 * Math.cos(this.angle * Math.PI / 29) + 70
        this.angle += this.angleSpeed

        if (gameFrame % this.flapSpeed === 0)
          this.frame > 4 ? this.frame = 0 : this.frame++;
      }
      draw() {
        ctx3.fillRect(this.x, this.y, this.width, this.height)
        ctx3.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
      }
    }
    class Enemy3 {
      constructor() {
        this.spriteWidth = 65
        this.spriteHeight = 54
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        this.x = 100
        this.y = 30
        this.speed = Math.random() * 2 - 4;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 16 + 10);
        this.angle = Math.random() * 300
        this.angleSpeed = 0.1
        this.curve = Math.random() * 1 + 10
      }
      update() {
        this.x = 80 * Math.sin(this.angle * Math.PI / 100) + (200 / 2 - this.width / 2)
        this.y = 60 * Math.sin(this.angle * Math.PI / 200) + (160 / 2 - this.height / 2)
        this.angle += this.angleSpeed

        if (gameFrame % this.flapSpeed === 0)
          this.frame > 4 ? this.frame = 0 : this.frame++;
      }
      draw() {
        ctx1.fillRect(this.x, this.y, this.width, this.height)
        ctx1.drawImage(enemyImage, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
      }
    }
    console.log(canvasRef)
    for (let i = 0; i < 2; i++) {
      fireFlyArr.push(new Enemy())
    }
    for (let i = 0; i < 2; i++) {
      fireFlyArr.push(new Enemy3())
    }
    for (let i = 0; i < 2; i++) {
      fireFlyArr.push(new Enemy2())
    }
    for (let i = 0; i < 4; i++) {
      fireFlyArr.push(new Enemy4())
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.clearRect(0, 0, 2000, 200)
      ctx1.fillStyle = "rgba(0,0,0,0)";
      ctx1.clearRect(0, 0, 2000, 200)
      ctx2.fillStyle = "rgba(0,0,0,0)";
      ctx2.clearRect(0, 0, 2000, 200)
      ctx3.fillStyle = "rgba(0,0,0,0)";
      ctx3.clearRect(0, 0, 2000, 200)
      ctx4.fillStyle = "rgba(0,0,0,0)";
      ctx4.clearRect(0, 0, 2000, 200)
      // enemy1.update()
      // enemy1.draw();
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
    setNativeLanguage(props.location)
  }, [props.location]);

  console.log(props.location)

  return (
    <div className='header' style={{ position: 'relative', minHeight: '790px', minWidth: '1540px' }}>

      <div style={{ ...style }} className='menu'>
        <canvas ref={canvasRef} style={{ position: 'absolute', width: '25%', height: '23%', zIndex: 7, bottom: '5%', right: '0' }} id="canvas1"></canvas>
        <div style={{ position: 'absolute', width: '25%', height: '23%', bottom: '2.6vh', left: '25%' }}>
          <div style={{ position: 'relative', overflow: 'hidden', height: '100%', bottom: '10px', overflow: 'hidden', zIndex: 7 }}>
            <img src={arbust} style={{
              position: 'absolute',
              bottom: '-2px',
              width: '70%',
              height: '73%',
              opacity: '80%',
              left: '34.5%',
              filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 15px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 15px rgba(0, 0, 0, 0.3))' // Adicione esta linha para sombras nos lados e na parte superior
            }}></img>
            <canvas ref={canvasRef1} style={{ width: '100%', height: '100%', bottom: '5%', left: '25%', zIndex: 7 }} id="canvas1"></canvas>
          </div>
        </div>
        <canvas ref={canvasRef2} style={{ position: 'absolute', width: '25%', height: '23%', bottom: '5%', left: '0%', zIndex: 7 }} id="canvas1"></canvas>
        <canvas ref={canvasRef3} style={{ position: 'absolute', width: '25%', height: '23%', bottom: '5%', right: '25%', zIndex: 7 }} id="canvas1"></canvas>
        <div className='menuPosition'  >
          <div style={{ position: "relative", display: "flex", width: "100%", justifyContent: "center" }}>
            <div className='menuHeader' style={{ alignSelf: "center" }}>
              <div className='menuText'><Link to="sobre" spy={true} smooth={true} offset={50} duration={500}> {nativeLanguage ? "Sobre" : "About"}</Link></div>
              <div className='menuText'><Link to="projetos" spy={true} smooth={true} offset={50} duration={500}>{nativeLanguage ? "Projetos" : "Projects"}</Link></div>
              <div className='menuText'><Link to="contato" spy={true} smooth={true} offset={50} duration={500}>{nativeLanguage ? "Contato" : "Contact"}</Link></div>
            </div>
            <div onClick={() => props.handleLocation()}
              style={{ height: "35px", cursor: "pointer", width: "80px", border: "1px solid white", borderRadius: "5px", alignSelf: "center", position: "absolute", right: "250px", top: "35px", display: "flex", }}>
              <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {!nativeLanguage && <img style={{ width: "100%", height: "100%" }} src={eua}></img>}
                {nativeLanguage && <p style={{ color: "white", textAlign: "center" }}>PT</p>}
              </div>
              <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {nativeLanguage && <img style={{ width: "100%", height: "100%" }} src={brasil}></img>}
                {!nativeLanguage && <p style={{ color: "white", textAlign: "center" }}>EN</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={style} className='set'>

        <div className='headerText'>
          <div className='headerArt'></div>
          <h1>Higor Pires</h1>
          <h1 id='h1S'>Full stack Developer</h1>
          <div className='socialMediaBox'>
            <a href='https://github.com/hlpires'><div className='socialMedia' id='socialMedia1'></div></a>
            <a href='https://www.linkedin.com/in/higor-piresdev/'><div className='socialMedia' id='socialMedia3'></div></a>
            <Link to="contato" spy={true} smooth={true} offset={500} duration={1100}> <div className='socialMedia' id='socialMedia2'> </div></Link>
            {/* <Link spy={true} smooth={true} offset={50} duration={500}><div className = 'socialMedia' id = 'socialMedia3'></div></Link> */}
          </div>
          <div className='buttonHeader'>
            <p style={{ alignSelf: 'center' }}> <Link to="projetos" spy={true} smooth={true} offset={50} duration={1200}>{nativeLanguage ? "Ver projetos" : "See projects"}</Link></p>
          </div>
        </div>


      </div>
    </div >
  )
}

export default Header