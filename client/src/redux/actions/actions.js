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

export function getNaveByName(name) {
    return async function (dispatch) {
        let nave = await axios.get(`http://localhost:3005/satelite?name=${name}`)
        return dispatch({
            type: 'GET_NAVE_BY_NAME_SATELITE',
            payload: nave.data
        })
    }

}
export function deleteNaveSatelite(id) {
    return async function (dispatch) {
        let nave = await axios.get(`http://localhost:3005/satelite/${id}`)
        return dispatch({
            type: 'DELETE_NAVE_SATELITE',
            payload: nave.data
        })
    }

}
export function getNaveByNames(name) {
    return async function (dispatch) {
        let naveS = await axios.get(`http://localhost:3005/sonda?name=${name}`)
        return dispatch({
            type: 'GET_NAVE_BY_NAME_SONDA',
            payload: naveS.data
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

export function createNaveTripulada(payload) {
    return async function() {
        return await axios.post('http://localhost:3005/tripulada', payload)

    }
}
export function createNaveSonda(payload) {
    console.log(payload)
    return async function() {
        return await axios.post('http://localhost:3005/sonda', payload)

    }
}
export function createNaveSatelite(payload) {
    return async function() {
        return await axios.post('http://localhost:3005/satelite', payload)

    }
}