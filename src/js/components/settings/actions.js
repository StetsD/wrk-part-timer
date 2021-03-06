export const CHANGE_MODE = 'CHANGE_MODE';
export const CHANGE_TIMER_TIME = 'CHANGE_TIMER_TIME';
export const ERROR = 'ERROR';
export const NEW_AUDIO_END = 'NEW_AUDIO_END';

export function changeMode(mode){
	return{
		type: CHANGE_MODE,
		payload: mode
	}
}

export function changeTimerTime(type, val){
	return {
		type: CHANGE_TIMER_TIME,
		payload: {type, val}
	}
}

export function error(err){
    return {
        type: ERROR,
        err
    }
}

export function newAudioEnd(path){
	return {
		type: NEW_AUDIO_END,
		path
	}
}
