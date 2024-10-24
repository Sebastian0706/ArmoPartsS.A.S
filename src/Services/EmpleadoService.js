import axios from "axios";

const api = 'http://localhost:8085/listarE'

export const getAllEmpleado = async () => {
    const respuesta = await axios.get(api)
    return respuesta.data
}