import React from 'react';
import {Link} from "react-router-dom";
import '../styles/LandingPage.css'
const LandingPage = () => {
    return (
        <div>
            <div className="div-info">
                <h1>Bienvenidos</h1>
                <p>Si quieres ver los Tipos de naves que exiten presion aqui abajo <br/>

                </p>
                <div className="div-btn-landing">
                    <Link to="/home">
                        <button>Iniciar</button>
                    </Link>
                </div>
                <div className="div-p">
                    <p>Tambien puedes crear una nave e interactuar con la pagina</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;