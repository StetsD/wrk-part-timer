import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {start, pause, stop, tick, end} from './actions';
import {secSummary} from '../../modules/customizeModule';
import TimerMech from '../../modules/TimerMech';
import './style.scss';

let timerMech = new TimerMech();

class Controls extends Component{
    constructor(props){
        super(props);
        this.handleClickCtrl = this.handleClickCtrl.bind(this);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    handleClickCtrl(e, val){
        this.actCtrl(val.icon);
    }

    actCtrl(type){
        let {mode, timerTime, ctrlStart, ctrlPause, timeDynamic, time} = this.props;
        let summary = secSummary(timerTime);
        let timeCorrect = ctrlPause ? timeDynamic : summary;

        switch(type){
            case 'play':
                mode === 'timer' && timerMech.initTimer(timeCorrect, this.props.dispatch.bind(this), tick, end);
                mode === 'timer-chain' && timerMech.initTimerChain();
                mode === 'stopwatch' && timerMech.initStopwatch();
                this.props.dispatch(start(summary));
                break;
            case 'pause':
                mode === 'timer' && timerMech.pauseTimer();
                this.props.dispatch(pause());
                break;
            case 'stop':
                this.props.dispatch(stop());
                mode === 'timer' && timerMech.destroyTimer();
                mode === 'timer-chain' && timerMech.destroyTimerChain();
                mode === 'stopwatch' && timerMech.destroyStopwatch();
                break;
            default:
                break;
        }
    }


    render(){
        return(
            <div className="app__controls">
                <Button.Group>
                    <Button onClick={this.handleClickCtrl} icon="play"></Button>
                    <Button onClick={this.handleClickCtrl} icon="pause"></Button>
                    <Button onClick={this.handleClickCtrl} icon="stop"></Button>
                </Button.Group>
            </div>
        )
    }
}


let appState = (state) => {
    return {
        mode: state.appReducer.mode,
        time: state.appReducer.time,
        timerTime: state.appReducer.timerTime,
        timeDynamic: state.appReducer.timeDynamic,
        ctrlPause: state.appReducer.ctrlPause,
        ctrlStart: state.appReducer.ctrlStart
    }
};

export default connect(appState)(Controls)
