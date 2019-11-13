// actions.index.js

const axios = require('axios');

// axios.get('http://localhost/react/october/api/process.php?function=fetchemployees')
// .then(response => {
//     // console.log(response);
// })
// .catch(error => {
//     // console.log(error);
// });

// To add new user
export const addUser = (user) => {
    return {
        type : 'ADD_USER',
        payload : user
    }
}

// To delete user
export const deleteUser = (userId) => {
    return {
        type: 'DELETE_USER',
        payload: userId
    }
}

// To fetch users (Redux thunk)
export const fetchUsers = () => {
    return async function fetchUserList(dispatch) {
        await axios.get('http://localhost/react/october/api/process.php?function=fetchemployees')
        .then(response => {
            dispatch({
                type: 'FETCH_USERS',
                payload: response.data.employees
            })
        })
        .catch(error => {
            // console.log(error);
        });
    }
}