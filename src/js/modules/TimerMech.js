function secSummary(time){
		return +(time.H * 3600) + +(time.M * 60) + +time.S;
}

export default class TimerMech{
	constructor(){
		this.state = 'stop',
		this.time = 0;
		this.timer;
		this.timerChain;
		this.stopwatch;
	}

	initTimer(time, dispatch, tickAction){
		let summary = secSummary(time);
		let that = this;

		if(summary && this.state == 'stop'){
			this.state = 'run';
			this.summary = summary;
			this.time = summary;

			dispatch(tickAction(that.time));

			this.timer = setTimeout(function run(){
				that.time = that.time - 1;

				dispatch(tickAction(that.time));
				that.timer = setTimeout(run, 1000);

				that.time === 0 && that.destroyTimer();
			}, 1000);
		}
	}

	initTimerChain(){
		console.log('init timer-chain');
	}

	initStopwatch(){
		console.log('init stopwatch');
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
