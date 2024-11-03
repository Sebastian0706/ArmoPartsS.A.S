import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { getAllAutoparte } from '../Services/AutoparteService.js';

const Administrador = () => {
  const [autope, setAutope] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAutoPartes();
  }, []);

  const fetchAutoPartes = async () => {
    try {
      const response = await getAllAutoparte();
      setAutope(response);
    } catch (error) {
      setError(error);
    }
  };

  const CrearAutoparte = () => {
    const [autoparte, setAutoparte] = useState({ Id: '', Nombre: '' });

    const handleChange = (e) => {
      setAutoparte({ ...autoparte, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!autoparte.Id || !autoparte.Nombre) {
        Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
        return;
      }
      try {
        await axios.post('http://localhost:8085/autopartes', autoparte); // Asegúrate de que esta URL sea la correcta
        Swal.fire('Éxito', 'Autoparte Registrada', 'success');
        fetchAutoPartes(); // Actualizar lista después de agregar
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div>
        <center>
          <h1>Armo Parts S.A.S</h1>
          <h3>Autopartes</h3>
          <div className='buscador'>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Crear
            </button>
            <div className="barra">
              <label htmlFor="exampleDataList" className="form-label"></label>
              <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar pedido..." />
            </div>
            <button type="button" className="btn btn-secondary">Buscar</button>
          </div>
          <div className="marco">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {autope.map((a) => (
                  <tr key={a.Id}>
                    <td>{a.Id}</td>
                    <td>{a.Nombre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>

        {/* Modal para Crear Autoparte */}

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Autoparte</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Id</span>
                    <input type="number" onChange={handleChange} name="Id" className="form-control" placeholder="ID" aria-label="Id" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                    <input type="text" onChange={handleChange} name="Nombre" className="form-control" placeholder="NOMBRE" aria-label="Nombre" aria-describedby="inputGroup-sizing-default" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  };

  return <CrearAutoparte />;
};

export default Administrador;
