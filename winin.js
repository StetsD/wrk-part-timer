var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
	appDirectory: './',
    outputDirectory: '/winin',
    authors: 'StetsD',
    exe: 'wkr-part-timer.exe',
    loadingGif: './ico/setup.gif',
    owners: 'StetsD',
    description: 'Simple timer (Electron + React)',
    version: '1.0.0',
    iconUrl: './ico/icon.ico',
    setupIcon: './ico/icon.ico'
});

resultPromise.then(() => console.log("It worked"), e => console.log(e.message));
