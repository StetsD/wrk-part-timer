const electron = require('electron');
const {app, BrowserWindow, dialog} = electron;

var WIN;

app.on('ready', ()=> {
    WIN = new BrowserWindow({
        width: 790,
        height: 270
    });

    WIN.loadURL(`file://${__dirname}/app/index.html`);
});
