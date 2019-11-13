// index.js
// To combine reducers

import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import EditReducer from './EditReducer';

export default combineReducers({
    UserReducer : UserReducer,
    EditReducer: EditReducer
});
