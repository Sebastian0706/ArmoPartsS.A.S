import axios from "axios";

const api = 'http://localhost:8085/listar'

export const getAllAutoparte = async () => {
    const respuesta = await axios.get(api)
    return respuesta.data
}

