const path = require('path');
const {config} = require('../../../config');

export default class AudioPlayer{
	constructor(props){
		this.audio = props.audio;
		this.src = props.audio.querySelector('source')
		this.srcFinish = props.srcFinish || config.paths.defaultAudioEnd;

		this.src.src = this.srcFinish;
	}

	setAudioEnd(path, cb){
		this.src.src = path;
		this.audio.load();
		cb && cb();
	}

	getAudioEnd(){
		return this.src.src;
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
