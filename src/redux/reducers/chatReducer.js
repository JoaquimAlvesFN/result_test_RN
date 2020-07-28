const initialState = {
    data: [],
    text: ''
};

const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEWMSG':
            return {...state, data: action.message}

        case 'TEXT_CHANGE':
            return {...state, text: action.text}

        default:
            return state;
    }
}

export default loadReducer;