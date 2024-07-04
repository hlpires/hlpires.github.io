import React, { useState, useEffect } from 'react'
// import Modal from './components/Modal'
import Header from './Header'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contato from './Contato'
import Rodape from './Rodape'


function Index() {

    const [nativeLocation, setNativeLocation] = useState(true);


    return (
        <div >
            <Header handleLocation={() => {
                setNativeLocation(prev => !prev)
                console.log("something")
            }} location={nativeLocation} />
            <Sobre location={nativeLocation} />
            <Projetos location={nativeLocation} />
            <Contato location={nativeLocation} />
            <Rodape location={nativeLocation} />
        </div>
    )



}

export default Index