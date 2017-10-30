import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import _ from 'lodash';
import {CHANGE_MODE, CHANGE_TIMER_TIME} from './components/settings/actions';
import {START, PAUSE, STOP, TICK} from './components/controls/actions';

const initialState = {
	mode: 'timer',
    time: 0,
    ctrlStart: false,
    ctrlPause: false,
    ctrlStop: false,
    timerTime: {
        H: 0,
        M: 0,
        S: 0
    }
}

let appReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case CHANGE_MODE:
            return {...state, mode: action.payload, timerTime: {H:0,M:0,S:0}};
            break;
        case CHANGE_TIMER_TIME:
            let {type, val} = action.payload;
            return _.set(state, `timerTime.${type}`, val);
            break;
        case START:
            return {...state, ctrlStart: true, ctrlPause: false, ctrlStop: false};
        case PAUSE:
            return {...state, ctrlPause: true, ctrlStart: false, ctrlStop: false};
        case STOP:
            return {...state, ctrlStop: true, ctrlPause: false, ctrlStart: false};
        case TICK:

            return {...state};
        default:
            return state;
    }
}


export default combineReducers({
    routing: routerReducer,
    appReducer
})
