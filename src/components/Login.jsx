import React, { useState } from 'react';

const Login = () => {
    const [isVisible, setIsbisible] = useState(true)
    const hiddenShow = () => {
        if (isVisible) {
            setIsbisible(false)
        }else{
            setIsbisible(true)
        }
    }
    return (
        <div>
            <h2>Ingrese contraseña</h2>
            <input type={isVisible ? "password" : "text"} />
            <button onClick={hiddenShow}>{isVisible ? "Show" : "Hidden"}</button>
        </div>
    );
};

export default Login;