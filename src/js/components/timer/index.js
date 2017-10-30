import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import Chart from 'chart.js';
import style from './style.scss';

let colorMap = {
    25: '#43A047',
    50: '#FDD835',
    75: '#F57F17',
    100: '#F4511E'
};

function getSpecifyColor(val){
    for(var key in colorMap){
        if(val < +key){
            return colorMap[key];
        }
    }
}

class Timer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        let {time, timeDynamic} = this.props;
        let val = (1 - (timeDynamic / time)) * 100;
        let valColor = getSpecifyColor(+val.toFixed(1));


        return(
            <div className="app__timeline">
                <div className="app__timeline-inner">
                    <div className="app__timeline-prg"
                        style={{
                            width: `${val}%`,
                            backgroundColor: valColor
                        }}></div>
                </div>
            </div>
        )
    }
}

let appState = (state) => {
	return {
		time: state.appReducer.time,
        // ctrlStart: state.appReducer.ctrlStart,
		// ctrlPause: state.appReducer.ctrlPause,
		// ctrlStop: state.appReducer.ctrlStop,
		timeDynamic: state.appReducer.timeDynamic
	}
}

export default connect(appState)(Timer)
