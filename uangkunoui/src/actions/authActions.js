import axios from 'axios';
import { 
    USER_LOGIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING,
    LOGOUT,
    COOKIE_CHECKED,
    SELECT_POPOK
} from './types';

export const onUserRegister = ({ username, email, phone, password }) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING })

        if(username === '' || email === '' || phone === '' || password === '') {
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Semua form diatas wajib diisi!' })
        }
        else {
            // axios.get('http://localhost:1984/users', { 
            // axios.get('http://localhost:1984/auth/register', {
            //     params: {
            //         username
            //     }
            // }).then((res) => {
            //     if(res.data.length === 0) {
            //         // axios.post('http://localhost:1984/users', {
                    axios.post('http://localhost:1984/auth/register', {
                        username, email, password, phone
                    }).then((res) => {
                        console.log(res.data)
                        if(res.data.status === 'error') {
                        // dispatch({ type : USER_LOGIN_SUCCESS, payload: res.data.username })
                        dispatch({ type: AUTH_SYSTEM_ERROR, payload: res.data.message })
                    // }).catch((err) => {
                    //     console.log(err);
                    //     dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error' })
                    // })
                }
                else {
                    // dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Username has been taken'})
                    dispatch({ type : USER_LOGIN_SUCCESS, payload: res.data })
                }
                
            }).catch((err) => {
                dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
            })
        }
    }
}

export const onUserLogout = () => {
    return { type: LOGOUT }
}

export const keepLogin = (username) => {
    return (dispatch) => {
        // axios.get('http://localhost:1984/auth/users', {
        axios.post('http://localhost:1984/auth/keeplogin', {username}
            // params: {
            //     username
            // }
        ).then((res) => {
            // if(res.data.length > 0) {
                console.log(res.data[0]);
                dispatch({ 
                    type: USER_LOGIN_SUCCESS, 
                    payload: res.data[0]
                    // payload: { email: res.data[0].email, username } 
                })
        })
    }
}

export const cookieChecked = () => {
    return { type: COOKIE_CHECKED }
}

export const onUserLogin = ({ username, password }) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING })

        // setTimeout(() => loginYok(dispatch,username,password), 2000);
        loginYok(dispatch,username,password);
    }
}

var loginYok = (dispatch,username,password) => {
    // axios.get('http://localhost:1984/users', {
    axios.post('http://localhost:1984/auth/signin', {
            // params: {
                username,
                password
            // }
        }).then((res) => {
            console.log(res)
            if (res.data.length > 0) {
                dispatch({ 
                    type: USER_LOGIN_SUCCESS, 
                    payload: { email: res.data[0].email, username }
                })
            }
            else {
                dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Username or password invalid' })
            }
        }).catch((err) => {
            console.log(err)
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error' })
        })
}

export const select_popok = (selectedPopok) => {
    return { 
        type: SELECT_POPOK,
        payload: selectedPopok
    }
}

export const onUserVerified = (userData) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: userData
    }
}