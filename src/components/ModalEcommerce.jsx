import React, {useState} from 'react'
import curriculo from '../img/Curriculo.png'
import ecommerceImg from '../img/modalEcommerce.png'

const ModalEcommerce = ({open,onClose}) => {

   

    if(!open) return null

  return (
    <div className ='modalEcommerce'>
        <div className = 'modalBox'>
            <div className = 'modalEcommerceImg'><img className ='EcommerceImgSize' src= {ecommerceImg}></img></div>
            <div className = 'modalEcommerceText'><p className ='modalEcommerceTextP'>Mussum Ipsum, cacilds vidis litro abertis.
             In elementis mé pra quem é amistosis quis leo.
            Sapien in monti palavris qui num significa nadis i pareci latim.
            Quem num gosta di mim que vai caçá sua turmis!Em pé sem cair, deitado sem dormir, 
            sentado sem cochilar e fazendo pose
            Sapien in monti palavris qui num significa nadis i pareci latim.
            Quem num gosta di mim que vai caçá sua turmis!Em pé sem cair, deitado sem dormir, 
            sentado sem cochilar e fazendo pose.</p>
            
            <div className = 'modalButtonBox'>
              <div className = 'modalButtonCode'><p className ='modalEcommerceTextP'>Codigo</p></div>
              <div className = 'modalButtonDemo'><p className ='modalEcommerceTextP'>Demo</p></div>
            </div>
            
            </div>

        </div>
        <div className = 'modalBox1' onClick= {onClose}></div>
    </div>
  )
}

export default ModalEcommerce