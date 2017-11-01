import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {getSpecifyColor, getTimePart} from '../../modules/customizeModule';
import Chart from 'chart.js';
import style from './style.scss';


class Timer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        let {time, timeDynamic, mode} = this.props;
        let val = mode === 'timer' ? getTimePart(time, timeDynamic) : 0;
        let valColor = mode === 'timer' ? getSpecifyColor(+val.toFixed(1), 'code') : '#FFFFFF';

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
        mode: state.appReducer.mode,
		time: state.appReducer.time,
		timeDynamic: state.appReducer.timeDynamic
	}
}

export default connect(appState)(Timer)
