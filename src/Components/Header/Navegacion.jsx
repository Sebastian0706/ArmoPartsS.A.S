import { Link } from "react-router-dom"
import icono from '../../assets/img/icono.png'

const Navegacion = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={icono} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listar">Autoparte </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/listarE">Empleado </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listarP">Pedido</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Iniciar sesion </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navegacion
