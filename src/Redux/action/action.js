import { API_CALL } from "../constant/constant"

export const apiCalling = () => {
    return dispatch => {
        try {
            fetch('https://reactnative.dev/movies.json')
            .then(result => result.json())
            .then(response => dispatch({type: API_CALL, payload: response.movies}))
        } catch (error) 
        {
            console.log (error)
        }
    }
}