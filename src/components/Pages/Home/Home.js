import React, { useState, useEffect } from "react";
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import Marcadores from '../Marcadores/Marcadores'
import axios from "axios";

function Home() {
  const URL = 'https://www.scorebat.com/video-api/v1/'
  const [marcadores, setMarcadores] = useState([])

useEffect(()=>{
  axios.get(URL)
  .then((response)=>{
    let data = response.data
    setMarcadores(data)
  }).catch((err)=>{
    console.log(err)
  })
})

  return (
    <>
      <Header />
      <div className="container">
        {
          <div className="col-sm-12">
            <div className="card">
              {/* <div className="card-body"> */}
                <h3>Live Sports</h3>
                {/* <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th className="tituloTabla" scope="col-sm-2">Titulo</th>
                      <th className="tituloTabla" scope="col-sm-1">Link</th>
                      <th className="tituloTabla" scope="col-sm-6">En Vivo!</th>
                    </tr> */}
                    {marcadores.map((p) => {
                      return (
                      <div className="card">
                          <Marcadores
                            title={p.title}
                            url={p.url}
                            imagen ={p.thumbnail}
                            date={p.date}
                            videos={p.embed}
                            competition={p.competition.name}
                          />
                      </div>
                      );
                    })}
                  {/* </tbody>
                </table> */}
              {/* </div> */}
            </div>
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default Home
