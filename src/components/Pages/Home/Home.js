import React, { useState, useEffect} from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import axios from 'axios'

function Home() {
    const [marc, setMarc] = useState ('');
    const URL = 'https://www.scorebat.com/video-api/v1/';
    useEffect (()=>{
      axios.get(URL)
        .then((response)=>{
          let allMarc = response.data
          setMarc(allMarc)
          console.log(marc)
        }).catch((err)=>{
          console.log(err);
        });
},[marc]);

    return (
        <>
        <Header />
        <h3>Marcadores de Hoy</h3>

        { 
        marc.map((x)=>{
          // return x.title;
          console.log(x.title)
        })

        
            
        <Footer />
        </>
    )
}

export default Home
