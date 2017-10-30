const colorMap = {
    25: {
        code: '#21ba45',
        key: 'green'
    },
    50: {
        code: '#FBBD08',
        key: 'yellow'
    },
    75: {
        code: '#F2711C',
        key: 'orange'
    },
    100: {
        code: '#DB2828',
        key: 'red'
    }
};

export function getSpecifyColor(val, type){
    for(var key in colorMap){
        if(val < +key){
            return type === 'code' ? colorMap[key].code : colorMap[key].key;
        }
    }
}

export function getTimePart(summary, part){
    return (1 - (part / summary)) * 100;
}


export function secSummary(time){
		return +(time.H * 3600) + +(time.M * 60) + +time.S;
}
