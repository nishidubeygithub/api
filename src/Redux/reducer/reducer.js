import { API_CALL } from '../constant/constant'

const initialState = {
    data: []
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case API_CALL:
            return {...state, data:payload}

 
 default:
    return state
    }
}