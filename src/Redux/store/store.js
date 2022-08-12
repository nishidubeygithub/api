import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "../reducer/reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    reducer:reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store