import React from 'react'
import ecommerceImg from '../img/cslogobc.png'

const ModalEsports = ({open,onClose}) =>  {


    if(!open)return null

  return (
    <div className ='modalEcommerce'>
        <div className = 'modalBox'>
            <div className = 'modalEcommerceImg'><img className ='EcommerceImgSize' src= {ecommerceImg}></img></div>
            <div className = 'modalEcommerceText'><p className ='modalEcommerceTextP'> <span className = 'spanEco'> Em Desenvolvimento </span>Ecommerce de venda de Joías utilizando
            <span className = 'spanEco'> MongoDb</span> como banco de dados,<span className = 'spanEco'> React</span> e <span className = 'spanEco'>NodeJS</span>, para o Front-End, website consome a API do banco de dados
            para prencher os produtos, sistema de login para a inserção de novos produtos pelo usuario utilizando Request de <span className = 'spanEco'>API REST</span>, demais tecnologias usadas: 
             <span className = 'spanEco'> CSS</span>, <span className = 'spanEco'> JS</span>,<span className = 'spanEco'> Git</span></p>
            
            <div className = 'modalButtonBox'>
            <a href="https://github.com/hlpires/ecommercemongodb"><div className = 'modalButtonCode'><p className ='modalEcommerceTextP'>Codigo</p></div></a>
            
            </div>
            
            </div>

        </div>
        <div className = 'modalBox1' onClick= {onClose}></div>
    </div>
  )
}

export default ModalEsports