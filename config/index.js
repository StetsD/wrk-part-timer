const path = require('path');
let cwd = process.cwd();

const config = {
	paths: {
        'app': path.normalize(`${cwd}/app`),
        'assets': path.normalize(`${cwd}/assets`),
        'public': path.normalize(`${cwd}/app/public`),
        'src': path.normalize(`${cwd}/src`),
        'appAssets': path.normalize(`${cwd}/app/public/assets`)
    },
    endAlarmSizeLimit: 10000000,
    msg: {
        err:{
            alarmLimit: 'Your file is too big. Load file less or equal 10Mb'
        }
    }
}

module.exports = {
    config: config
}
