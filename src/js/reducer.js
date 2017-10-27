import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const initialState = {

}

let appReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}


export default combineReducers({
    routing: routerReducer,
    appReducer
})
