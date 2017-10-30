import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {start, pause, stop, tick} from './actions';
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
        let {mode, timerTime} = this.props;
        switch(type){
            case 'play':
                this.props.dispatch(start());
                mode === 'timer' && timerMech.initTimer(timerTime, this.props.dispatch.bind(this), tick, stop);
                mode === 'timer-chain' && timerMech.initTimerChain();
                mode === 'stopwatch' && timerMech.initStopwatch();
                break;
            case 'pause':
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
        // let {ctrlStop} = this.props;
        // ctrlStop && this.actCtrl('stop');

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
        timerTime: state.appReducer.timerTime,
        ctrlStop: state.appReducer.ctrlStop
    }
};

export default connect(appState)(Controls)
