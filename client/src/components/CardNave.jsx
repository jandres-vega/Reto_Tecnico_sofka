import React from 'react';
import '../styles/CardNave.css';

const CardNave = ({nameNave, speed_max,weight,push,type,locationEart,typeLanding}) => {
    return (
        <div>
            <div className="div-card">
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
                        {locationEart}
                        {typeLanding}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default CardNave;