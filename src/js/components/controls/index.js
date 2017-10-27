import React, {Component} from 'react';
import {Form, Radio} from 'semantic-ui-react';


export default class Controls extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Form>
                <Form.Field>Select mode</Form.Field>
                <Form.Field>
                    <Radio label="Timer" name="appMode" value="timer"></Radio>
                </Form.Field>
                <Form.Field>
                    <Radio label="Timer-Chain" name="appMode" value="timer-chain"></Radio>
                </Form.Field>
                <Form.Field>
                    <Radio label="Stopwatch" name="appMode" value="stopwatch"></Radio>
                </Form.Field>
            </Form>
        )
    }
}
