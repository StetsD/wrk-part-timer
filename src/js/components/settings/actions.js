export const CHANGE_MODE = 'CHANGE_MODE';
export const CHANGE_TIMER_TIME = 'CHANGE_TIMER_TIME';

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
