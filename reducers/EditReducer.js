// CrudReducer.js
import { users } from './user';

const EditReducer = function reducer(state = users, action) {
    switch(action.type) {
        case 'EDIT_USER':
            let user = action.payload;
            return user;
        default:
            return state;
    }
}

export default EditReducer;
