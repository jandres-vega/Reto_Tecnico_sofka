import React from 'react';
import '../styles/CardNaveTripulada.css'
const CardNaveTripulada = ({nameNave, speed_max, weight, push,type, numberCrew, purposeNave}) => {
    return (
        <div>
            <div className="div-card-tri">
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
                        {numberCrew}
                        {purposeNave}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default CardNaveTripulada;