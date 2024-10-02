const Login = () => {

    return (

        <div className="container / login">
            <h1>Login</h1>
            <form className="login-form">
                <div className="input-group">
                    <label>ID</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Contraseña</label>
                    <input type="password" />
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