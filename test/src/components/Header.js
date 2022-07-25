/*import './Header.css';*/
import React, { Component } from 'react';
import logo from '../img/refugios-libres.jpg';
import Salutacio from './Salutacio.js';

class Header extends Component {
    render() {
        var usuari = "Marina";
        return (
            <h1 className="salutacio"> <img src={logo} height="50px" alt=""/> El teu portal de montanya <Salutacio nick={usuari} /> </h1>
        )
    }
}

export default Header;