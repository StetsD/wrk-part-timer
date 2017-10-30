function secSummary(time){
		return +(time.H * 3600) + +(time.M * 60) + +time.S;
}

export default class TimerMech{
	constructor(){
		this.time = 0;
		this.timer;
		this.timerChain;
		this.stopwatch;
	}

	initTimer(time, cb, tickAction, completeAction){
		let summary = secSummary(time);
		let that = this;
		if(summary){
			this.time = summary + 1;
			this.timer = setTimeout(function run(){
				that.time = that.time - 1;

				cb(tickAction(that.time));
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
		clearTimeout(this.timer);
	}

	destroyTimerChain(){

	}

	destroyStopwatch(){

	}
}
