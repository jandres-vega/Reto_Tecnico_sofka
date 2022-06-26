import axios from "axios";

export function getNavesSatelite() {
    return async function (dispatch) {
        const allNaveSatelite = await axios.get('http://localhost:3005/satelite');
        return dispatch({
            type: 'GET_ALL_SATELITES',
            payload: allNaveSatelite.data
        })
    }
}
export function getNavesSonda() {
    return async function (dispatch) {
        const allNaveSonda = await axios.get('http://localhost:3005/sonda');
        return dispatch({
            type: 'GET_ALL_NAVE_SONDA',
            payload: allNaveSonda.data
        })
    }
}

export function getNavesTripulada() {
    return async function (dispatch) {
        const allNaveTripulada = await axios.get('http://localhost:3005/tripulada');
        return dispatch({
            type: 'GET_ALL_NAVE_TRIPULADA',
            payload: allNaveTripulada.data
        })
    }
}