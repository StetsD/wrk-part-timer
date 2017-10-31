const path = require('path');
const {config} = require('../../../config');
const defaultAudioEnd = '/public/assets/default/finish.mp3';

const audioPath = window.process ?
	path.normalize(`${config.paths.app}${defaultAudioEnd}`) :
	defaultAudioEnd;


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
