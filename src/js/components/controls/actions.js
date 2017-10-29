export const START = 'START';
export const PAUSE = 'PAUSE';
export const STOP = 'STOP';

export function start(){
	return {
		type: START
	}
}

export function pause(){
	return {
		type: STOP
	}
}

export function stop(){
	return{
		type: STOP
	}
}
