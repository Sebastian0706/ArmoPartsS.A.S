import React from 'react'
import '../assets/css/estilos.css'
/*import img1 from '../assets/img/Imagen 1.jpeg'*/
import img1 from '../assets/img/Imagen1.jpeg'
import img2 from '../assets/img/Imagen 2.jpeg'
import img3 from '../assets/img/Imagen 3.jpeg'
import img4 from '../assets/img/Imagen 4.jpeg'


const Principal = () => {
  return (
    <div>
      <center>
        <h1>Armo Parts S.A.S</h1>
        <br />

        <div className='cajas'>

          <div className="card kar"  >
            <div className="card-body">
              <img src={img1} alt="" />
              <h5 className="card-title">Barra De Protección Cb 190R</h5>
            </div>
          </div>

          <div className="card kar" >
            <div className="card-body">
              <img src={img2} alt="" />
              <h5 className="card-title">Parrilla Para Maletero Discover 125 St / 125 St-R</h5>
            </div>
          </div>

        </div>
        <br />
        <br />

        <div className='cajas'>
          
          <div className="card kar"  >
            <div className="card-body">
              <img src={img3} alt="" />
              <h5 className="card-title">Parrilla Para Maletero Pulsar Ns 200</h5>
            </div>
          </div>

          <div className="card kar"  >
            <div className="card-body">
              <img src={img4} alt="" />
              <h5 className="card-title">Porta Alforjas Nkd</h5>
            </div>
          </div>

        </div>
        <br />
        <br />
      </center>
    </div>
  )
}

export default Principal