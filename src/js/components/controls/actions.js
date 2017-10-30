export const START = 'START';
export const PAUSE = 'PAUSE';
export const STOP = 'STOP';
export const TICK = 'TICK';

export function start(){
	return {
		type: START
	}
}

export function pause(){
	return {
		type: PAUSE
	}
}

export function stop(){
	return{
		type: STOP
	}
}

export function tick(val){
	return{
		type: TICK,
		val
	}
}
