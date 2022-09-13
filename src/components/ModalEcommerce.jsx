import React, {useState} from 'react'
import curriculo from '../img/Curriculo.png'
import ecommerceImg from '../img/modalsafire.png'

const ModalEcommerce = ({open,onClose}) => {

    if(!open) return null

  return (
    <div className ='modalEcommerce'>
        <div className = 'modalBox'>
            <div className = 'modalEcommerceImg'><img className ='EcommerceImgSize' src= {ecommerceImg}></img></div>
            <div className = 'modalEcommerceText'>
              <p className ='modalEcommerceTextP'>•	Sistema de autenticação de credenciais utilizando MongoDb e Next Auth, permitindo usuário autenticado inserir novos produtos</p>
              <p className ='modalEcommerceTextP'>•	Interações REST API com o Banco de dados para consulta de produtos</p>
              <p className ='modalEcommerceTextP'>•	Sistema de pagamentos utilizando a API do Stripe</p>
              <p className ='modalEcommerceTextP'>•	Multi-Page, navegação de paginas utilizando Next Router</p>
              <p className ='modalEcommerceTextP'>•	Local Storage para armezenamento de dados do carrinho de compras</p>
              <p className ='modalEcommerceTextP'>•	Front end utilizando HTML, CSS, JavaScript, Next.js e React</p>
          
            
            
            
            <div className = 'modalButtonBox'>
              <a href="https://github.com/hlpires/ecommercemongodb"><div className = 'modalButtonCode'><p className ='modalEcommerceTextP'>Codigo</p></div></a>
              <a href="https://ecommercemongodb.vercel.app/"><div className = 'modalButtonDemo'><p className ='modalEcommerceTextP'>Demo</p></div></a>
            </div>
            
            </div>

        </div>
        <div className = 'modalBox1' onClick= {onClose}></div>
    </div>
  )
}

export default ModalEcommerce