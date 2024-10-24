import axios from "axios";

const api = 'http://localhost:8085/listarP'

export const getAllPedido = async () => {
    const respuesta = await axios.get(api)
    return respuesta.data
}

