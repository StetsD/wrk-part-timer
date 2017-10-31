const path = require('path');
const audioPath = window.process ?
	path.normalize(`${window.process.cwd()}/app/public/assets/default/finish.mp3`) :
	'/public/assets/default/finish.mp3';


export default class AudioPlayer{
	constructor(props){
		this.audio = props.audio;
		this.src = props.audio.querySelector('source')
		this.srcFinish = props.srcFinish || audioPath;

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
