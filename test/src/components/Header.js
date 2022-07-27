import React, { Component } from 'react';
import './Header.css';
import logo from '../img/refugios-libres.jpg';
import LoginControl from './LoginControl.js';

class Header extends Component {
    render() {
        var usuari = "Marina";
        return (
            <h1 className="salutacio">
                <img src={logo} height="50px" alt=""/> El teu portal de montanya 
                <LoginControl nick={usuari}/> </h1>
        )
    }
}

export default Header;