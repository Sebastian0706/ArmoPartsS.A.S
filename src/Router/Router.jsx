import { Routes, Route } from "react-router-dom"
import Principal from "../Pages/Principal"
import Administrador from "../Pages/Administrador"
import Login from "../Pages/Login"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/Administrador" element={<Administrador/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router
