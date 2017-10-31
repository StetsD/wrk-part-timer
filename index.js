const electron = require('electron');
const {app, BrowserWindow, dialog} = electron;

var WIN;

app.on('ready', ()=> {
    WIN = new BrowserWindow({
        width: 775,
        height: 210
    });

    WIN.loadURL(`file://${__dirname}/app/index.html`);
});
