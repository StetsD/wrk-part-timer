var MODE = null;

function getMode(){
    return MODE;
}

function setMode(newMode){
    MODE = newMode;
}

module.exports = {
    getMode: getMode,
    setMode: setMode
}
