import axios from "axios";

const api = 'http://localhost:8085/login';

export const getLogin = async (usuario, contraseña) => {
    try {
        const respuesta = await axios.get(api, {
            params: { usuario: usuario, contraseña: contraseña }
        });

        return respuesta.data;  // Devuelve los datos de la respuesta
    } catch (error) {
        console.error("Error en la petición de login:", error);
        throw error;  // Lanza el error para que pueda ser capturado en el componente
    }
};
