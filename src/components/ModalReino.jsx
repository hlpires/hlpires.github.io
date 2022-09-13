import React from 'react'
import ecommerceImg from '../img/reinoanimal.png'

const ModalReino = ({open,onClose}) =>  {

    

   

  if(!open)return null

  return (
    <div className ='modalEcommerce'>
        <div className = 'modalBox'>
            <div className = 'modalEcommerceImg'><img className ='EcommerceImgSize' src= {ecommerceImg}></img></div>
            <div className = 'modalEcommerceText'><p className ='modalEcommerceTextP'>
              <p className ='modalEcommerceTextP'>•		HTML, CSS, JavaScript, Componentes Estilizados e React</p>
              <p className ='modalEcommerceTextP'>•	Interações REST API com o Banco de dados para consulta de produtos</p>
              <p className ='modalEcommerceTextP'>•	Sistema de pagamentos utilizando a API do Stripe</p>
              <p className ='modalEcommerceTextP'>•	Multi-Page</p>
              <p className ='modalEcommerceTextP'>•	Local Storage para armezenamento de dados do carrinho de compras</p></p>
            
            <div className = 'modalButtonBox'>
              <a href="https://github.com/hlpires/reinoAnimalProject" ><div className = 'modalButtonCode'><p className ='modalEcommerceTextP'>Codigo</p></div></a>
              <a href="https://hlpires.github.io/reinoAnimalProject/" ><div className = 'modalButtonDemo'><p className ='modalEcommerceTextP'>Demo</p></div></a>
            </div>
            
            </div>

        </div>
        <div className = 'modalBox1' onClick= {onClose}></div>
    </div>
  )
}

export default ModalReino