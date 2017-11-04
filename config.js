const path = require('path');
let base = __dirname;

const config = {
	paths: {
        'app': path.normalize(`${base}/app`),
        'assets': path.normalize(`${base}/assets`),
        'public': path.normalize(`${base}/app/public`),
        'src': path.normalize(`${base}/src`),
        'appAssets': path.normalize(`${base}/app/public/assets`),
		'defaultAudioEnd': base === '/' ?
            path.normalize(`./public/assets/default/finish.mp3`) :
            path.normalize(`${process.cwd()}/app/public/assets/default/finish.mp3`)
    },
    endAlarmSizeLimit: 10000000,
    msg: {
        err:{
            alarmLimit: 'Your file is too big. Load file less or equal 10Mb',
			badAudioType: 'Allowed formats are only mp3, wav, ogg'
        },
		warning:{
			modeTimeChain: 'This mode is locked and developing'
		}
    },
	audioTypes: {
		'.mp3': true,
		'.wav': true,
		'.ogg': true
	}
}

module.exports = {
    config: config
}
