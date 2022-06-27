import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Home.css'
import ListCard from "../containers/ListCard";
import Search from "../components/Search";


const Home = () => {
    return (
        <div>
            <div className="div-btns">
                <div className="boton1">
                    <Link to="/formSatelite">
                        <button>AGREGAR NAVE SATELITE</button>
                    </Link>
                </div>
                <div className="boton2">
                    <Link to="/formSonda">
                        <button>AGREGAR NAVE SONDA</button>
                    </Link>

                </div>
                <div className="boton3">
                    <Link to="/formTripulada">
                        <button>AGREGAR NAVE TRIPULANTE</button>
                    </Link>
                </div>
            </div>
           <div>
               <Search />
           </div>
            <div>
                <ListCard />
            </div>

        </div>
    );
};

export default Home;