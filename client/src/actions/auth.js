import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({type: 'AUTH', data })
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({type: 'AUTH', data })
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}


// export const login = (authData, navigate) => async (dispatch) => {
//   try {
//     const { data, status } = await api.logIn(authData)
//     if (status === 200) {
//       dispatch({type: 'AUTH', data })
//       dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
//       navigate('/')
//     } else {
//       console.log(`Unexpected status code: ${status}`);
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

