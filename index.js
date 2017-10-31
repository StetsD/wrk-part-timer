const electron = require('electron');
const {app, BrowserWindow, dialog} = electron;
const {config} = require('./config');

var WIN;

app.on('ready', ()=> {
    WIN = new BrowserWindow({
        width: 790,
        height: 270
    });

    WIN.loadURL(`file://${config.paths.app}/index.html`);
});
