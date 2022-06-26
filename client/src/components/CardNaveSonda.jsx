import React from 'react';
import '../styles/CardNaveSonda.css'
const CardNaveSonda = ({nameNave, speed_max, weight, push,type,earthDistance, location}) => {

    return (
        <div>
            <div className="div-card-sonda">
                <div className="div-gen">
                    <h3>Nombre</h3>
                    <h4> {nameNave} </h4>
                    <p>
                        {speed_max}<br/>
                        {weight}<br/>
                        {push}
                    </p>
                </div>
                <div className="div-info-type">
                    <p>Caracteristicas</p>
                    <h4> {type} </h4>
                    <p>
                        {earthDistance}
                        {location}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default CardNaveSonda;