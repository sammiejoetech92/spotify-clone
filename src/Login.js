import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
        
            <img src="https://i.ibb.co/gTTZ6hj/Spotify-symbol.jpg" alt="" />
            {/* Spotify logo */}
            {/* Login with Spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
