const path = require('path');


export default class AudioPlayer{
	constructor(props){
		this.audio = props.audio;
		this.src = props.audio.querySelector('source')
		this.srcFinish = props.srcFinish || '/public/assets/default/finish.mp3';

		this.src.src = this.srcFinish;
	}

	play(){
		this.audio.play();
	}

	stop(){
		let {audio} = this;
		audio.pause();
		audio.currentTime = 0;
	}


}
