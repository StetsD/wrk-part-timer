import React, {Component} from 'react';
import {Form, Radio} from 'semantic-ui-react';


export default class Controls extends Component{
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
            <Form>
                <Form.Field>Select mode</Form.Field>
                <Form.Field>
                    <Radio label="Timer" onChange={this.handleChangeMode} checked={this.state.valueMode === 'timer'} name="appMode" value="timer"></Radio>
                </Form.Field>
                <Form.Field>
                    <Radio label="Timer-Chain" onChange={this.handleChangeMode} checked={this.state.valueMode === 'timer-chain'} name="appMode" value="timer-chain"></Radio>
                </Form.Field>
                <Form.Field>
                    <Radio label="Stopwatch" onChange={this.handleChangeMode} checked={this.state.valueMode === 'stopwatch'} name="appMode" value="stopwatch"></Radio>
                </Form.Field>
            </Form>
        )
    }
}
