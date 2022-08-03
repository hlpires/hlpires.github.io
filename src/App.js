import React,{useState,useEffect} from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'


function App () {
  const [isLoading, setIsLoading] =useState(true);

const handleLoading = () => {
setIsLoading(false);
}

useEffect(()=>{
window.addEventListener("load",handleLoading);
return () => window.removeEventListener("load",handleLoading);
},[])

return !isLoading ? (
  <div>
  <Header/>
  <Sobre />
  <Modal />
  <Projetos/>
  <Contato/>
  </div> 
):(<div>loading</div>)

}

export default App