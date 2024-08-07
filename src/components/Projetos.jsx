import React, { useState, useEffect, useRef } from 'react'
import ModalEcommerce from './ModalEcommerce'
import ModalReino from './ModalReino'
import ModalEsports from './ModalEsports'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Lottie from "lottie-react"
import animationCrypto from "../assets/Animationcrypto.json"
import animationCryptoChain from "../assets/crypto.json"
import animationEcomerce from "../assets/animationEcommerce.json"
import animationEcomerce2 from "../assets/animationEcommerce2.json"
import player from "../img/player.png"

const Projetos = (props) => {

  const [modalEcommerce, setModalEcommerce] = useState(false)
  const [modalEsports, setModalEsports] = useState(false)
  const [modalReino, setModalReino] = useState(false)
  const [more, setMore] = useState(3)
  const [show, setShow] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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


  const projetos = [
    {
      nome: 'Safire',
      image: 'imageContent',
      tecnologia: ['reactIcon', 'mongoIcon', 'nextIcon', 'javascriptIcon'],
      texto: nativeLanguage ? "Loja online de vendas de produtos, com sistema de carrinho de compras, pagamentos, login, banco de dados proprio e área de admin para registro de novos produtos."
        : "Online store for the sale of products, with a shopping cart system, payment processing, login functionality, a proprietary database, and an admin area for registering new products.",
      codigo: 'https://github.com/hlpires/ecommercemongodb',
      demo: 'https://ecommercemongodb.vercel.app/',
      video: true,
      animation: animationEcomerce
    },
    {
      nome: 'Fast Crypto',
      image: 'imageContent2',
      tecnologia: ['reactIcon', 'mongoIcon', 'apiIcon', 'javascriptIcon'],
      texto: nativeLanguage ? 'Aplicação web para consulta de dados de crypto moedas, para analises de mercado utilizando gráficos.'
        : "Web application for querying cryptocurrency data for market analysis using charts.",
      codigo: 'https://github.com/hlpires/fastcrypto',
      demo: 'https://fastcrypto-nu.vercel.app/',
      animation: animationCrypto,
      animationStyle: { marginLeft: "-200px", width: "78%" }
    },
    {
      nome: 'Web 3 project (Development)',
      image: 'imageContent3',
      tecnologia: ['solidityIcon', 'metamaskIcon', 'reactIcon', 'ethereumIcon'],
      texto: nativeLanguage ? 'Mercado de compra e vendas de NFTS, utlizando a rede Ethereum.'
        : "Marketplace for buying and selling NFTs using the Ethereum network.",
      codigo: '',
      demo: '',
      animation: animationCryptoChain,
      animationStyle: { width: "400px", marginLeft: "160px" }
    },
    {
      nome: 'Tecno Center',
      image: 'imageContent4',
      tecnologia: ['reactIcon', 'javascriptIcon', 'apiIcon', ''],
      texto: nativeLanguage ? 'Comercio online que utiliza uma api para fazer o banco de dados, sistema de pagamentos.'
        : "Online commerce that utilizes an API to manage the database and payment system.",
      codigo: 'https://github.com/hlpires/ecommercemongodb',
      demo: 'https://ecommerceapp-self.vercel.app/',
      animation: animationEcomerce2,
      animationStyle: { marginLeft: "-120px", width: "70%" }
    }
    // {
    //   nome: 'Reino Animal',
    //   image: 'imageContent5',
    //   tecnologia: ['javascriptIcon', '', '', ''],
    //   texto: 'Aplicação Web, para promoção e divulgação de serviços de uma Petshop de Caruaru SP',
    //   codigo: 'https://github.com/hlpires/reinoAnimalProject',
    //   demo: 'https://hlpires.github.io/reinoAnimalProject/'
    // },
  ]

  useEffect(() => {

    Aos.init({ duration: 1000 })

  }, [])

  return (
    <div>
      {/* onClick = {() =>{setModalEsports(true)}} 
   () =>{setModalEcommerce(true)}
   () =>{setModalReino(true)} */}
      <div className='projetos'>
        <div className='position' style={{ position: 'relative', paddingBottom: "70px" }}>
          {/* <canvas className='fireflyShow' ref={canvasRef} style={{ position: 'absolute', width: '180px', height: '220px', top: '10px', right: '20px', zIndex: 7 }} id="canvas1"></canvas>
          <canvas className='fireflyShow' ref={canvasRef1} style={{ position: 'absolute', width: '180px', height: '23%', top: '10px', right: '20px', zIndex: 7 }} id="canvas2"></canvas>
          <img className='fireflyShow' src={lamp} style={{ position: 'absolute', right: '20px', top: '20px', width: '170px', filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 1.1))', zIndex: 6 }} /> */}
          <div className='sobreTitle fireflyShow'><h6>{nativeLanguage ? "Projetos" : "Projects"}</h6></div>
          {projetos.slice(0, more).map(({ nome, tecnologia, texto, codigo, demo, image, video, animation, animationStyle }, index) => {


            return (
              <div style={{
                marginTop: "120px",
                justifyContent: "center",
                width: "90%",
                display: "flex",
                flexDirection: index % 2 === 1 ? "row-reverse" : "row"
              }} >
                <div style={{ display: "flex", flexDirection: "column", width: "40%", position: "relative", zIndex: "8" }}>
                  <div onClick={nome === 'Safire' ? openModal : ''}
                    style={{
                      minHeight: '380px',
                      width: "80%",
                      marginLeft: "10%",
                      borderRadius: "5px"
                    }}>
                    <div style={{ position: "absolute", minHeight: '380px', width: "100%", zIndex: "4" }}>
                      <div id={image} style={{ height: '380px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', position: "relative", width: "100%" }} >
                        {video && <div
                          onMouseEnter={(e) => { e.target.style.opacity = "1" }}
                          onMouseLeave={(e) => { e.target.style.opacity = "0.6" }}
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                          <img style={{ width: "300px", height: "300px", opacity: "0.4" }} src={player}></img>
                        </div>}
                      </div>
                    </div>
                  </div>


                  <div className='projetosBox' id='projetosBox1'>
                    <div style={{ position: "absolute", width: "100%", zIndex: 4 }}>
                      <p className='projetosTextContent'>{nome}</p>
                      <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex' }}>
                        <p style={{ alignSelf: 'center', fontSize: '26px', fontFamily: 'fantasy', color: 'white' }}>{nativeLanguage ? "Tecnologia" : "Technology"}</p>
                        <div id={tecnologia[0]} style={{
                          width: '50px', height: '100%', alignSelf: 'center',
                          marginLeft: '2%'
                        }}></div>
                        <div id={tecnologia[1]} style={{
                          width: '50px', height: '100%', alignSelf: 'center',
                          marginLeft: '2%'
                        }}></div>
                        <div id={tecnologia[2]} style={{
                          width: '50px', height: '100%', alignSelf: 'center',
                          marginLeft: '2%'
                        }}></div>
                        <div id={tecnologia[3]} style={{
                          width: '50px', height: '100%', alignSelf: 'center',
                          marginLeft: '2%'
                        }}></div>
                      </div>
                      <div style={{ maxHeight: '230px', overflowY: 'hidden' }}>
                        <p className='projetosTextContent2'>{texto}</p>
                      </div>
                      {codigo && <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                        <a href={codigo}><div className='buttonProject'><p style={{ alignSelf: 'center' }} > {nativeLanguage ? "Codigo" : "Code"}</p></div></a>
                        <a href={demo} style={{ marginLeft: '5%' }}><div className='buttonProject' ><p style={{ alignSelf: 'center' }} >Demo</p></div></a>
                      </div>}
                    </div>
                  </div>
                </div>
                <div style={{ height: "100px", width: "48%", marginLeft: "120px", height: "780px", display: "flex", justifyContent: "center" }}>
                  <div style={{ alignSelf: "center", width: "600px", zIndex: "8", transform: "scaleX(1)", ...animationStyle }}>
                    <Lottie
                      height={10}
                      size={10}
                      width={10}
                      animationData={animation} />
                  </div>
                </div>
              </div>

            )
          })}
          <div style={{ display: show }} onClick={
            () => {
              setMore(5)
              setShow('none')
            }
          } className='buttonExibir'>
            <p style={{ alignSelf: 'center', }}> {nativeLanguage ? "Exibir mais" : "Show more"}</p>
          </div>
        </div>
        <div className="modal1" ></div>
        <div className="modal2" style={{ zIndex: 6 }} ></div>
        {isModalOpen && (
          <div className="modal" onClick={closeModal} style={{ zIndex: 9 }}>
            <div className="modal-content">
              <span className="close" onClick={closeModal} ></span>
              <iframe
                style={{ backgroundColor: "black", zIndex: 9 }}
                src="https://www.veed.io/embed/db15cd09-dc36-4410-9147-479b48b3a8dd"
                width="100%"
                height="654"
                frameBorder="0"
                title="Untitled.mp4"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <ModalEcommerce open={modalEcommerce} onClose={() => setModalEcommerce(false)} />
        <ModalReino open={modalReino} onClose={() => setModalReino(false)} />
        <ModalEsports open={modalEsports} onClose={() => setModalEsports(false)} />
      </div>
    </div >
  )
}

export default Projetos