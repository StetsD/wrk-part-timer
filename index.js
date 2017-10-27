const electron = require('electron');
const {app, BrowserWindow, dialog} = electron;

var WIN;

app.on('ready', ()=> {
    WIN = new BrowserWindow({
        width: 400,
        height: 400
    });

    WIN.loadURL(`file://${__dirname}/app/index.html`);
});
