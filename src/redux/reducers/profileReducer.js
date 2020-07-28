const initialState = {
    data: {}
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILE':
            return {...state, data: action.profile}
    
        default:
            return state;
    }
}

export default profileReducer;