import axios from 'axios'

const api = 'http://localhost:8085/login'

export const authenticateUser = async() =>{

    const respuesta = await axios.get(api)
    return respuesta.data

}