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
        default:
            return state
    }
}

export default rootReducer;