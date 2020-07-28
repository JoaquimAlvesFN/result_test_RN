const initialState = {
    data: []
};

const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
            return {...state, data: action.payload}
    
        default:
            return state;
    }
}

export default loadReducer;