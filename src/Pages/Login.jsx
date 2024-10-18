import axios from 'axios'
import React from 'react'
import { getLogin } from '../Services/LoginService.js';

import { useState, useEffect } from 'react'


const Login = () => {
    const [usuario, setUsuario] = useState('')

    const [contraseña, setContraseña] = useState('')

    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.get('http://localhost:8085/login', {
                params: { usuario: usuario, contraseña: contraseña }
            });

            if (response.data && response.data.length > 0) {
                localStorage.setItem('user', JSON.stringify(response.data[0]));
            } else {
                alert('Credenciales Incorrectas')
            }
        } catch {
            alert('Hubo un error en el Inicio de Sesion')
            console.error('Error en el incio de sesion: ', error)

        }
    };

    return (

        <div className="container / login">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label>ID</label>

                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />


                </div>
                <div className="input-group">
                    <label>Contraseña</label>
                    <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                </div>

                <div>
                    <a href="#">¿Olvidó su contraseña?</a>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    );
};

export default Login