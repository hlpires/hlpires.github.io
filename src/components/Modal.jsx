import React, {useState} from 'react'
import curriculo from '../img/Curriculo.png'
import jsPDF from 'jspdf'

const Modal = ({open,onClose}) => {

   function geradorpdf(){
     var doc =new jsPDF('landscape','px','a4','false');
     doc.addImage(curriculo,'PNG',65,20,500,400)
     doc.save('Curriculo.pdf')

   }

    if(!open) return null

  return (
    <div className ='overlay'>
        <div className ='modalContainer'>
        <button  className ='modalButton'onClick = {onClose}></button>
        <button  className ='modalButton1'onClick = {onClose}></button>
        <img className = 'modalImg' src ={curriculo}></img>
        <button className = 'modalButtonPdf' onClick = {geradorpdf}></button>
        </div>
    </div>
  )
}

export default Modal