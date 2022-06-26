import React from 'react';
import '../styles/ListCard.css'
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getNavesSatelite, getNavesSonda, getNavesTripulada} from '../redux/actions/actions'
import CardNave from "../components/CardNave";
import CardNaveSonda from "../components/CardNaveSonda";
import CardNaveTripulada from "../components/CardNaveTripulada";
const ListCard = () => {

    const dispatch = useDispatch();
    const allNaveSatelite = useSelector((state => state.allNaveSatelite))
    const allNaveSonda = useSelector((state => state.allNaveSonda))
    const navesTripulada = useSelector((state => state.allNaveTripulada))
    useEffect(() => {
        dispatch(getNavesSatelite())
        dispatch(getNavesSonda())
        dispatch(getNavesTripulada())
    },[]);
    console.log(navesTripulada)

    return (
        <div className="div-con">
            <div className="container-card-satelite">
                {
                    allNaveSatelite?.map(data => (
                        <CardNave
                            key={data.id}
                            nameNave={data.NaveLanzadera.nameNave}
                            weight={data.NaveLanzadera.weight}
                            speed_max={data.NaveLanzadera.speed_max}
                            push={data.NaveLanzadera.push}
                            type={data.NaveLanzadera.type}
                            locationEart={data.locationEart}
                            typeLanding={data.typeLanding}

                        />
                    ))
                }
            </div>
            <div className="container-cardS">
                {
                    allNaveSonda?.map(e => (
                        <CardNaveSonda
                            key={e.key}
                            nameNave={e.NaveLanzadera.nameNave}
                            weight={e.NaveLanzadera.weight}
                            speed_max={e.NaveLanzadera.speed_max}
                            push={e.NaveLanzadera.push}
                            type={e.NaveLanzadera.type}
                            earthDistance={e.earthDistance}
                            location={e.location}
                        />
                    ))
                }
            </div>
            <div className="containers-cardT">
                {
                    navesTripulada?.map(index => (
                        <CardNaveTripulada
                            nameNave={index.NaveLanzadera.nameNave}
                            weight={index.NaveLanzadera.weight}
                            speed_max={index.NaveLanzadera.speed_max}
                            push={index.NaveLanzadera.push}
                            type={index.NaveLanzadera.type}
                            numberCrew={index.numberCrew}
                            purposeNave={index.purposeNave}

                        />
                    ))
                }

            </div>
        </div>
    );
};

export default ListCard;