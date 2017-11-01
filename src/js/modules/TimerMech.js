import store from '../store';

export default class TimerMech{
	constructor(store){
		this.state = 'stop';
		this.time = 0;
		this.timer;
		this.timerChain;
		this.stopwatch;
	}

	initTimer(summary, dispatch, tickAction, endAction){
		let that = this;

		this.state = 'stop';

		if(summary && this.state === 'stop'){
			that.destroyTimer();
			this.state = 'run';

			dispatch(tickAction(summary, 'timer'));

			this.timer = setTimeout(function run(){
				dispatch(tickAction(null, 'timer'));
				that.timer = setTimeout(run, 1000);

				if(store.getState().appReducer.timeDynamic === 0){
					that.destroyTimer();
					dispatch(endAction());
				}
			}, 1000);
		}
	}

	initTimerChain(){
		console.log('init timer-chain');
	}

	initStopwatch(dispatch, tickAction, endAction){
		let that = this;

		if(this.state === 'stop'){
			that.destroyTimer();
			this.state = 'run';

			dispatch(tickAction(0));

			this.timer = setTimeout(function run(){
				dispatch(tickAction(null, 'stopwatch'));

				that.timer = setTimeout(run, 1000);

			}, 1000);
		}

	}

	pauseTimer(){
		this.destroyTimer();
	}

	pauseTimerChain(){
		this.destroyTimerChain();
		clearTimeout(this.timer);
	}

	pauseStopwatch(){
		this.destroyStopwatch();
		clearTimeout(this.timer);
	}

	destroyTimer(){
		this.state = 'stop';
		clearTimeout(this.timer);
	}

	destroyTimerChain(){
		this.state = 'stop';
		clearTimeout(this.timer);
	}

	destroyStopwatch(){
		this.state = 'stop';
		clearTimeout(this.timer);
	}

	destroyAll(){
		this.state = 'stop';
		clearTimeout(this.timer);
	}
}
