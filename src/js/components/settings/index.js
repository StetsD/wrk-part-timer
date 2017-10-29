import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect, dispatch} from 'react-redux';
import {Form, Radio, Input, Button} from 'semantic-ui-react';
import {changeMode} from './actions';
import './style.scss';

class Settings extends Component{
    constructor(props){
        super(props);
        this.handleChangeMode = this.handleChangeMode.bind(this);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    handleChangeMode(e, {value}){
		this.props.dispatch(changeMode(value));
    }

    render(){
        let {mode} = this.props;
        return(
            <div className="app__settings">
                <Form>
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

                    {/* Timeout mode */}
                    {mode === 'timer' ?
                        <Form.Group className="app__settings-time">
                            <Form.Field>
                                <label>H</label>
                                <Input type="number" min="0" placeholder="00"/>
                            </Form.Field>
                            <Form.Field>
                                <label>M</label>
                                <Input type="number" min="0" placeholder="00"/>
                            </Form.Field>
                            <Form.Field>
                                <label>S</label>
                                <Input type="number" min="0" placeholder="00"/>
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
                        <Form.Group>
                            <Form.Field>
                                <Button>Set Alarm</Button>
                            </Form.Field>
                        </Form.Group> : null
                    }

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
