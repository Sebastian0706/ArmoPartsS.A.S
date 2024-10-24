import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
    

    try {
        const response = await axios.get('http://localhost:8085/login', {
            params: { usuario: usuario, contrasena: contrasena },
        });

        if (response.data && response.data.length > 0) {
            localStorage.setItem('user', JSON.stringify(response.data[0]));
            navigate('/listar')
        } else {
            alert('Credenciales incorrectas. Intenta de nuevo.')
        }
    } catch (error) {
        console.error('Error en el Inicio de Sesión:', error)
        alert('Hubo un error en el Inicio de Sesión. Intenta más tarde');
    }
}

return (
    <div className="container login">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
                <label>ID</label>
                <input
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label>Contraseña</label>
                <input
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
            </div>
            <div>
                <a href="#">¿Olvidó su contraseña?</a>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
)
}

export default Login;