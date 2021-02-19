import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";
import axios from 'axios';

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}


export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}


export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
   
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicde.com/users')
            .then((response) => {
                const users = response.data;

                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log("errorMsg====>", errorMsg)
                dispatch(fetchUsersFailure(errorMsg));
            })
    }
}

export const fetchUsersPost = () => {
   
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'JWT fefege...'
            }
          })
            .then((response) => {
                const users = response.data;

                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log("errorMsg====>", errorMsg)
                dispatch(fetchUsersFailure(errorMsg));
            })
    }
}