const initiaState = {
    allNaveSatelite: [],
    allNaveSonda: [],
    allNaveTripulada: []
};

function rootReducer(state = initiaState, action) {
    switch (action.type) {
        case 'GET_ALL_SATELITES':
            return {
                ...state,
                allNaveSatelite: action.payload
            }
        case 'GET_ALL_NAVE_SONDA':
            return {
                ...state,
                allNaveSonda: action.payload
            }

        case 'GET_ALL_NAVE_TRIPULADA':
            return {
                ...state,
                allNaveTripulada: action.payload
            }

        case 'POST_NAVES_TRIPULADA':
            return {
                ...state
            }
        case 'POST_NAVES_SONDA':
            return {
                ...state
            }
        case 'POST_NAVES_SATELITE_SATELITE':
            return {
                ...state
            }

        case 'GET_NAVE_BY_NAME':
            return {
                ...state,
                allNaveSatelite: action.payload
            }

        case 'GET_NAVE_BY_NAME_SONDA':
            return {
                ...state,
                allNaveSonda: action.payload

            }

        case 'DELETE_NAVE_SATELITE' :
            return {
                ...state,
                allNaveSatelite: action.payload
            }

        default:
            return state
    }
}

export default rootReducer;