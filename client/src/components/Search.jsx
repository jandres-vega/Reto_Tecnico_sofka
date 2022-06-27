import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getNaveByName, getNaveByNames} from '../redux/actions/actions'
import '../styles/Serach.css'
const Search = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    function handlechange(e) {
        e.preventDefault();
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNaveByName(input))
        dispatch(getNaveByNames(input))
    }

    console.log(input)
    return (
        <div>
            <div className="div-search">
                <button className="btn-search" onClick={(e) => handleSubmit(e)}>Buscar</button>
                <input value={input}
                       className="input-search"
                       type="text"
                       placeholder="ingresa el nombre de la nave"
                       onChange={(e)=>handlechange(e)}
                />
            </div>
        </div>
    );
};

export default Search;