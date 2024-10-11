import axios from 'axios'
import React from 'react'
import { getAllAutoparte } from '../Services/AutoparteService'

import { useState, useEffect } from 'react'


const Administrador = () => {

  const [autope, setAutope] = useState([])
  const [error, setError] = useState('')

  useEffect(()=>{
    fetchAutoPartes()
  }, [])

  const fetchAutoPartes = async()=>{

      try {
        const r = await getAllAutoparte()
        setAutope(r)
        

      } catch (error) {
        setError(error)
      }


  }



  return (
    <div>

      <center>
        <h1>Armo Parts S.A.S</h1>

        <br />

        <h3>Pedidos</h3>

        <br />


        <div className='buscador'>
          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Crear
          </button>
            
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <div className="barra">
            <label for="exampleDataList" className="form-label"></label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar pedido..." />
          </div>

          <button type="button" className="btn btn-secondary">Buscar</button>

        </div>

      


      
        <div className="marco">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">N° pedido</th>
                <th scope="col">Fecha</th>
                <th scope="col">Autoparte</th>
              
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {autope.map((a)=>
                              <tr key={a.Id}>
                              <td>{a.Id}</td>
                              <td>{a.Nombre}</td>
                              <td>Eliminar</td>
                            </tr>

              )}

              

            </tbody>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Crear pedido</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Fecha</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Autoparte</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Cantidad</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Creado por</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary">Guardar</button>
                  </div>
                </div>
              </div>
            </div>

          </table>

        </div>

      </center>

    </div>
  )
}

export default Administrador
