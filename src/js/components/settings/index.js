import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect, dispatch} from 'react-redux';
import {Form, Radio, Input, Button} from 'semantic-ui-react';
import {changeMode, changeTimerTime} from './actions';
import './style.scss';

//Electron mech
const {remote} = require('electron'),
        {dialog} = remote;
const fs = require('fs');
const path = require('path');
const {config} = require('../../../config');

class Settings extends Component{
    constructor(props){
        super(props);
        this.handleChangeMode = this.handleChangeMode.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleOpenDialogAlarm = this.handleOpenDialogAlarm.bind(this);
        this.state = {
            timerTime: {
                H: 0,
                M: 0,
                S: 0
            }
        }
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    handleOpenDialogAlarm(){
        dialog.showOpenDialog({
            filters: [{name: 'Audio', extensions: ['mp3', 'wav', 'ogg']}],
            title: 'Select Audio',
            defaultPath: process.env.HOME,
            properties: ['openFile']
        }, file => {
            // console.log(fs.stat(file[0]));

            let readSt = fs.createReadStream(file[0]);
            let {base} = path.parse(readSt.path);
            console.log(base);
            // let writeSt = fs.createWriteStream();
            // console.log(file[0])

        });
    }

    handleChangeMode(e, {value}){
		this.props.dispatch(changeMode(value));
    }

    handleChangeTime(e, elem){
        let {name, value} = elem;
        this.props.dispatch(changeTimerTime(name, value));

        let timerTime = this.state.timerTime;
        timerTime[name] = +value;
        this.setState({timerTime});
    }

    render(){
        let {mode, timerTime} = this.props;
        return(
            <div className="app__settings">
                <Form>
                    <div className="app__main-settings">
                        <Form.Field><strong>Select mode</strong></Form.Field>
                        <Form.Field>
                            <Radio label="Timer" onChange={this.handleChangeMode} checked={mode === 'timer'} name="appMode" value="timer"></Radio>
                        </Form.Field>
                        <Form.Field>
                            <Radio label="Timer-Chain" onChange={this.handleChangeMode} checked={mode === 'timer-chain'} name="appMode" value="timer-chain"></Radio>
                        </Form.Field>
                        <Form.Field>
                            <Radio label="Stopwatch" onChange={this.handleChangeMode} checked={mode === 'stopwatch'} name="appMode" value="stopwatch"></Radio>
                        </Form.Field>
                    </div>

                    <div className="app__main-sub-settings">
                        {/* Timeout mode */}
                        {mode === 'timer' ?
                            <Form.Group className="app__settings-time">
                                <Form.Field>
                                    <label>H</label>
                                    <Input type="number" onChange={this.handleChangeTime} value={this.state.timerTime.H} min="0" name="H" placeholder="0"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>M</label>
                                    <Input type="number" onChange={this.handleChangeTime} value={this.state.timerTime.M} min="0" max="60" name="M" placeholder="0"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>S</label>
                                    <Input type="number" onChange={this.handleChangeTime} value={this.state.timerTime.S} min="0" max="60" name="S" placeholder="0"/>
                                </Form.Field>
                            </Form.Group> : null
                        }


                        {/* Set Interval */}
                        {mode === 'timer-chain' ?
                            <Form.Group>
                                <Form.Field>
                                    <Button>Set Chain</Button>
                                </Form.Field>
                            </Form.Group> : null
                        }


                        {/* Set alarm */}
                        {mode === 'timer' ?
                            <Form.Group className="app__settings-set-alarm">
                                <Form.Field>
                                    <Button onClick={this.handleOpenDialogAlarm}>Set Alarm</Button>
                                </Form.Field>
                            </Form.Group> : null
                        }
                    </div>
                </Form>
            </div>
        )
    }
}


let appState = (state) => {
	return {
		mode: state.appReducer.mode,
        timerTime: state.appReducer.timerTime
	}
};

export default connect(appState)(Settings)
