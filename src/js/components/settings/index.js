import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect, dispatch} from 'react-redux';
import {Form, Radio, Input, Button} from 'semantic-ui-react';
import {changeMode, changeTimerTime} from './actions';
import './style.scss';

class Settings extends Component{
    constructor(props){
        super(props);
        this.handleChangeMode = this.handleChangeMode.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    handleChangeMode(e, {value}){
		this.props.dispatch(changeMode(value));
    }

    handleChangeTime(e, elem){
        this.props.dispatch(changeTimerTime(elem.name, elem.value));
    }

    render(){
        let {mode} = this.props;
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
                                    <Input type="number" onChange={this.handleChangeTime} min="0" name="H" placeholder="00"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>M</label>
                                    <Input type="number" onChange={this.handleChangeTime} min="0" max="60" name="M" placeholder="00"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>S</label>
                                    <Input type="number" onChange={this.handleChangeTime} min="0" max="60" name="S" placeholder="00"/>
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
                                    <Button>Set Alarm</Button>
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
		mode: state.appReducer.mode
	}
};

export default connect(appState)(Settings)
