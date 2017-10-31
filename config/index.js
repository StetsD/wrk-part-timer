const path = require('path');
let cwd = process.cwd();

const config = {
	paths: {
        'app': path.normalize(`${cwd}/app`),
        'assets': path.normalize(`${cwd}/assets`),
        'public': path.normalize(`${cwd}/app/public`),
        'src': path.normalize(`${cwd}/src`)
    }
}

module.exports = {
    config: config
}
