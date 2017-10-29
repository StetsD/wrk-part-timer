import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {CHANGE_MODE} from './components/settings/actions';
import {START, PAUSE, STOP} from './components/controls/actions';

const initialState = {
	mode: 'timer',
    time: 0,
    ctrlStart: 0,
    ctrlPause: 0,
    ctrlStop: 0
}

let appReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MODE:
            return {...state, mode: action.payload};
            break;
        case START:
            return {...state, ctrlStart: ++state.ctrlStart};
        case PAUSE:
            return {...state, ctrlPause: ++state.ctrlPause};
        case STOP:
            return {...state, ctrlStop: ++state.ctrlStop};
        default:
            return state;
    }
}


export default combineReducers({
    routing: routerReducer,
    appReducer
})
