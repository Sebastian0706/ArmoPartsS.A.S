import React from 'react'

const Administrador = () => {
  return (
    <div>

      <center>
        <h1>Armo Parts S.A.S</h1>

        <br />

        <h3>Pedidos</h3>

        <br />


        <div className='buscador'>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
            <label for="exampleDataList" class="form-label"></label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar pedido..." />
          </div>

          <button type="button" class="btn btn-secondary">Buscar</button>

        </div>

      


      
        <div className="marco">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">N° pedido</th>
                <th scope="col">Fecha</th>
                <th scope="col">Autoparte</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Creado por</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Martes</td>
                <td></td>
                <td>200</td>
                <td>Sebas</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>lunes</td>
                <td></td>
                <td>100</td>
                <td>Angelica</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jueves</td>
                <td></td>
                <td>300</td>
                <td>Luis</td>
              </tr>

            </tbody>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Crear pedido</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default">Fecha</span>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default">Autoparte</span>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default">Cantidad</span>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default">Creado por</span>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Guardar</button>
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
