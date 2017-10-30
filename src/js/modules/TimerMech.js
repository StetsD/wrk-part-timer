import store from '../store';

export default class TimerMech{
	constructor(store){
		this.state = 'stop';
		this.time = 0;
		this.timer;
		this.timerChain;
		this.stopwatch;
	}

	initTimer(summary, dispatch, tickAction){
		let that = this;

		if(summary){
			that.destroyTimer();
			this.state = 'run';

			dispatch(tickAction(summary));

			this.timer = setTimeout(function run(){
				dispatch(tickAction());
				that.timer = setTimeout(run, 1000);

				store.getState().appReducer.timeDynamic === 0 && that.destroyTimer();
			}, 1000);
		}
	}

	initTimerChain(){
		console.log('init timer-chain');
	}

	initStopwatch(){
		console.log('init stopwatch');
	}

	pauseTimer(){
		this.destroyTimer();
	}

	destroyTimer(){
		this.state = 'stop';
		clearTimeout(this.timer);
	}

	destroyTimerChain(){
		this.state = 'stop';
	}

	destroyStopwatch(){
		this.state = 'stop';
	}
}
