import { Routes, Route } from "react-router-dom"
import Principal from "../Pages/Principal"
import Administrador from "../Pages/Administrador"
import Login from "../Pages/Login"
import Empleado from "../Pages/Empleado"
import Pedido from "../Pages/Pedido"


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/listar" element={<Administrador/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/listarE" element={<Empleado />} />
      <Route path="/listarP" element={<Pedido />} />

    </Routes>
  )
}

export default Router
