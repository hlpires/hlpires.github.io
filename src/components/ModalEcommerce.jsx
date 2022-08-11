import React, {useState} from 'react'
import curriculo from '../img/Curriculo.png'
import ecommerceImg from '../img/modalEcommerce.png'

const ModalEcommerce = ({open,onClose}) => {

    if(!open) return null

  return (
    <div className ='modalEcommerce'>
        <div className = 'modalBox'>
            <div className = 'modalEcommerceImg'><img className ='EcommerceImgSize' src= {ecommerceImg}></img></div>
            <div className = 'modalEcommerceText'><p className ='modalEcommerceTextP'><span>Tecno Center</span> Aplicação Full-Stack de compra de produtos online, utilizando 
             <span className = 'spanEco'> Sanity</span> como API de banco de dados,
          <span className = 'spanEco'>Stripe</span> para realização de pagamentos e <span className = 'spanEco'>Next.JS</span> com <span className = 'spanEco'>React</span> para a criação Front-end</p>
            
            <div className = 'modalButtonBox'>
              <a href="https://github.com/hlpires/ecommerceapp"><div className = 'modalButtonCode'><p className ='modalEcommerceTextP'>Codigo</p></div></a>
              <a href="https://ecommerceapp-3wqr2tq5f-hlpires.vercel.app/"><div className = 'modalButtonDemo'><p className ='modalEcommerceTextP'>Demo</p></div></a>
            </div>
            
            </div>

        </div>
        <div className = 'modalBox1' onClick= {onClose}></div>
    </div>
  )
}

export default ModalEcommerce