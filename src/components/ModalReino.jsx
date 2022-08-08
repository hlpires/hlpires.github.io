import React from 'react'
import ecommerceImg from '../img/reinoanimal.png'

const ModalReino = ({open,onClose}) =>  {

    

   

  if(!open)return null

  return (
    <div className ='modalEcommerce'>
        <div className = 'modalBox'>
            <div className = 'modalEcommerceImg'><img className ='EcommerceImgSize' src= {ecommerceImg}></img></div>
            <div className = 'modalEcommerceText'><p className ='modalEcommerceTextP'>Website dinâmico para divulgação de serviços, mostrar resultados 
            tecnologias usadas <span className = 'spanReino'> Javascript</span>, <span className = 'spanReino'>HTML</span>, <span className = 'spanReino'>CSS</span> e <span className = 'spanReino'>Jquery</span> 
          </p>
            
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