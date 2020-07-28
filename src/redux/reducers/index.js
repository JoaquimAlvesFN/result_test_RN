import { combineReducers } from 'redux';

import load from './loadReducer';
import profile from './profileReducer';
import chat from './chatReducer';

export default combineReducers({
    load,
    profile,
    chat
});