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
  const [more, setMore] = useState(3)
  const [show, setShow] = useState('')


  const projetos = [
    {
      nome: 'Safire',
      image: 'imageContent',
      tecnologia: ['reactIcon', 'mongoIcon', 'nextIcon', 'javascriptIcon'],
      texto: 'Comercio online completo, com sistema de carrinho de compras, pagamentos, login, banco de dados proprio e area de registro de novos produtos.',
      codigo: 'https://github.com/hlpires/ecommercemongodb',
      demo: 'https://ecommercemongodb.vercel.app/'
    },
    {
      nome: 'Fast Crypto',
      image: 'imageContent2',
      tecnologia: ['reactIcon', 'mongoIcon', 'apiIcon', 'javascriptIcon'],
      texto: 'Aplicação web para consulta de dados de crypto moedas, para analises de mercado utilizando gráficos',
      codigo: 'https://github.com/hlpires/fastcrypto',
      demo: 'https://fastcrypto-nu.vercel.app/'
    },
    {
      nome: 'Web 3 project',
      image: 'imageContent3',
      tecnologia: ['solidityIcon', 'metamaskIcon', 'reactIcon', 'ethereumIcon'],
      texto: 'Mercado de compra e vendas de NFTS, utlizando a rede Ethereum.',
      codigo: '',
      demo: ''
    },
    {
      nome: 'Tecno Center',
      image: 'imageContent4',
      tecnologia: ['reactIcon', 'javascriptIcon', 'apiIcon', ''],
      texto: 'Comercio online que utiliza uma api para fazer o banco de dados',
      codigo: 'https://github.com/hlpires/ecommercemongodb',
      demo: 'https://ecommerceapp-self.vercel.app/'
    },
    {
      nome: 'Reino Animal',
      image: 'imageContent5',
      tecnologia: ['javascriptIcon', '', '', ''],
      texto: 'Aplicação Web, para promoção e divulgação de serviços de uma Petshop de Caruaru SP',
      codigo: 'https://github.com/hlpires/reinoAnimalProject',
      demo: 'https://hlpires.github.io/reinoAnimalProject/'
    },
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

        <div className='position'>
          <div className='sobreTitle'><h6>Projetos</h6></div>
          {projetos.slice(0, more).map(({ nome, tecnologia, texto, codigo, demo, image }) => {
            return (
              <div className='projetosPosition'>
                <div data-aos='fade-right' className='projetosBox' id='projetosBox1'>
                  <p className='projetosTextContent'>{nome}</p>
                  <div style={{ width: '90%', height: '50px', marginLeft: '5%', display: 'flex' }}>
                    <p style={{ alignSelf: 'center', fontSize: '26px', fontFamily: 'fantasy', color: 'white' }}>Técnologia:</p>
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
                    <a href={codigo}><div className='buttonProject'><p style={{ alignSelf: 'center' }} >Codigo</p></div></a>
                    <a href={demo} style={{ marginLeft: '5%' }}><div className='buttonProject' ><p style={{ alignSelf: 'center' }} >Demo</p></div></a>
                  </div>}
                </div>
                <div data-aos='fade-right' className='projetosBox' id='projetosBoxArt' style={{ minHeight: '350px' }}>
                  <div id={image} style={{ minHeight: '350px' }} ></div>
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
            <p style={{ alignSelf: 'center', }}>Exibir mais</p>
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