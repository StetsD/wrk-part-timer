export const START = 'START';
export const PAUSE = 'PAUSE';
export const STOP = 'STOP';
export const TICK = 'TICK';
export const END = 'END';

export function start(summary){
	return {
		type: START,
		summary
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

export function tick(val, mode){
	return{
		type: TICK,
		val,
		mode
	}
}

export function end(){
	return{
		type: END
	}
}
