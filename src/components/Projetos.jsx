import React, { useState, useEffect } from 'react'
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

  const [modalEcommerce, setModalEcommerce] = useState(false)
  const [modalEsports, setModalEsports] = useState(false)
  const [modalReino, setModalReino] = useState(false)

  useEffect(() => {

    Aos.init({ duration: 1000 })

  }, [])

  return (
    <div>
      {/* onClick = {() =>{setModalEsports(true)}} 
   () =>{setModalEcommerce(true)}
   () =>{setModalReino(true)} */}

      <div className='projetos'>

        <div className='position'>
          <div className='sobreTitle'><h6>Projetos</h6></div>
          <div className='projetosPosition'>
            <div data-aos='fade-right' className='projetosBox' id='projetosBox1'>
              <p className='projetosTextContent'>Safire</p>
              <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex' }}>
                <p style={{ alignSelf: 'center', fontSize: '26px', fontFamily: 'fantasy', color: 'white' }}>Técnologia:</p>
                <div id='reactIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='mongoIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='nextIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='javascriptIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
              </div>
              <div style={{ maxHeight: '230px', overflowY: 'hidden' }}>
                <p className='projetosTextContent2'>Comercio online completo, com sistema de carrinho de compras, pagamentos, login,
                  area de registro de novos produtos.</p>
              </div>
              <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
                <a href="https://github.com/hlpires/ecommercemongodb"><div className='buttonProject'><p style={{ alignSelf: 'center' }} >Codigo</p></div></a>
                <a href="https://ecommercemongodb.vercel.app/" style={{ marginLeft: '5%' }}><div className='buttonProject' ><p style={{ alignSelf: 'center' }} >Demo</p></div></a>
              </div>
            </div>
            <div data-aos='fade-right' className='projetosBox' id='projetosBoxArt' style={{ minHeight: '350px' }}>
              <div id='imageContent' style={{ minHeight: '350px' }} ></div>
            </div>
          </div>
          <div className='projetosPosition' >
            <div data-aos='fade-right' className='projetosBox' id='projetosBox1'>
              <p className='projetosTextContent'>Fast Crypto</p>
              <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex' }}>
                <p style={{ alignSelf: 'center', fontSize: '26px', fontFamily: 'fantasy', color: 'white' }}>Técnologia:</p>
                <div id='reactIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='nextIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='javascriptIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='apiIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
              </div>
              <div style={{ maxHeight: '230px', overflowY: 'hidden' }}>
                <p className='projetosTextContent2'>Aplicação web para consulta de dados de crypto moedas, para analises de mercado utilizando gráficos</p>
              </div>
              <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex', marginTop: '2%', marginBottom: '20px' }}>
                <a href="https://github.com/hlpires/fastcrypto"><div className='buttonProject'><p style={{ alignSelf: 'center' }} >Codigo</p></div></a>
                <a href="https://fastcrypto-nu.vercel.app/" style={{ marginLeft: '5%' }}><div className='buttonProject' ><p style={{ alignSelf: 'center' }} >Demo</p></div></a>
              </div>
            </div>

            <div data-aos='fade-right' className='projetosBox' id='projetosBoxArt'>
              <div id='imageContent2' style={{ minHeight: '350px' }}></div>
            </div>

          </div>

          <div className='projetosPosition' >
            <div data-aos='fade-right' className='projetosBox' id='projetosBox1'>
              <p className='projetosTextContent'>Web 3 project</p>
              <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex' }}>
                <p style={{ alignSelf: 'center', fontSize: '26px', fontFamily: 'fantasy', color: 'white' }}>Técnologia:</p>
                <div id='solidityIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='metamaskIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='reactIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
                <div id='ethereumIcon' style={{
                  width: '50px', height: '100%', alignSelf: 'center',
                  marginLeft: '2%'
                }}></div>
              </div>
              <div style={{ maxHeight: '230px', overflowY: 'hidden' }}>
                <p className='projetosTextContent2'>Mercado de compra e vendas de NFTS, utlizando a rede ethereum</p>
              </div>
            </div>
            <div data-aos='fade-right' className='projetosBox' id='projetosBoxArt'>
              <div id='imageContent3' style={{ minHeight: '350px' }}></div>
            </div>
          </div>
        </div>


        <ModalEcommerce open={modalEcommerce} onClose={() => setModalEcommerce(false)} />
        <ModalReino open={modalReino} onClose={() => setModalReino(false)} />
        <ModalEsports open={modalEsports} onClose={() => setModalEsports(false)} />
      </div>
    </div>
  )
}

export default Projetos