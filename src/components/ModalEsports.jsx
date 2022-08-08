import React from 'react'
import ecommerceImg from '../img/cslogobc.png'

const ModalEsports = ({open,onClose}) =>  {


    if(!open)return null

  return (
    <div className ='modalEcommerce'>
        <div className = 'modalBox'>
            <div className = 'modalEcommerceImg'><img className ='EcommerceImgSize' src= {ecommerceImg}></img></div>
            <div className = 'modalEcommerceText'><p className ='modalEcommerceTextP'>Aplicação em desenvolvimento, website ira consumir uma API
            gerar um banco de dados conforme o desempenho dos times e gerar Dados e graficos a serem consultados tecnologias que estão sendo usadas
            <span className = 'spanEco'> MongoDb</span>,<span className = 'spanEco'> React</span>, <span className = 'spanEco'>HTML</span>,
             <span className = 'spanEco'>CSS</span>, <span className = 'spanEco'>JS</span>, <span className = 'spanEco'>Node</span></p>
            
            <div className = 'modalButtonBox'>
            <a href="https://github.com/hlpires/CsgoNews"><div className = 'modalButtonCode'><p className ='modalEcommerceTextP'>Codigo</p></div></a>
            
            </div>
            
            </div>

        </div>
        <div className = 'modalBox1' onClick= {onClose}></div>
    </div>
  )
}

export default ModalEsports