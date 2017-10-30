const path = require('path');

export default class AudioPlayer{
	constructor(props){
		this.elem = props.elem;
		this.srcFinish = props.srcFinish || `../assets/default/finish.mp3`;

		this.elem.src = this.srcFinish;
	}

	play(){

	}

	stop(){

	}


}
