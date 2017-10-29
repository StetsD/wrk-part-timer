import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {Form, Radio, Input, Button} from 'semantic-ui-react';
import './style.scss';

class Settings extends Component{
    constructor(props){
        super(props);
        this.handleChangeMode = this.handleChangeMode.bind(this);
        this.state = {
            valueMode: 'timer'
        }
    }

    handleChangeMode(e, {value}){
        this.setState({valueMode: value});
    }

    render(){
        return(
            <div className="app__settings">
                <Form>
                    <Form.Field><strong>Select mode</strong></Form.Field>
                    <Form.Field>
                        <Radio label="Timer" onChange={this.handleChangeMode} checked={this.state.valueMode === 'timer'} name="appMode" value="timer"></Radio>
                    </Form.Field>
                    <Form.Field>
                        <Radio label="Timer-Chain" onChange={this.handleChangeMode} checked={this.state.valueMode === 'timer-chain'} name="appMode" value="timer-chain"></Radio>
                    </Form.Field>
                    <Form.Field>
                        <Radio label="Stopwatch" onChange={this.handleChangeMode} checked={this.state.valueMode === 'stopwatch'} name="appMode" value="stopwatch"></Radio>
                    </Form.Field>

                    {/* Timeout mode */}
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
                    </Form.Group>

                    {/* Interval mode */}
                    {/* <Form.Group>
                        <Form.Field>
                            <label>Laps</label>
                            <Input type="number" min="0"/>
                        </Form.Field>
                    </Form.Group> */}

                    {/* Chain items */}
                    {/* <Form.Group>
                        <Form.Field>

                        </Form.Field>
                    </Form.Group> */}

                    {/* Set Interval */}
                    <Form.Group>
                        <Form.Field>
                            <Button>Set Chain</Button>
                        </Form.Field>
                    </Form.Group>

                    {/* Set alarm */}
                    <Form.Group>
                        <Form.Field>
                            <Button>Set Alarm</Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


let appState = (state) => {
	return {
		appReducer: state.appReducer
	}
};

export default connect(appState)(Settings)
