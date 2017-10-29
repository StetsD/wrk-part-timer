import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {Button} from 'semantic-ui-react';
import './style.scss';

class Controls extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="app__controls">
                <Button.Group>
                    <Button icon="play"></Button>
                    <Button icon="pause"></Button>
                    <Button icon="stop"></Button>
                </Button.Group>
            </div>
        )
    }
}


let appState = (state) => {
    return {
        appReducer: state.appReducer
    }
};

export default connect(appState)(Controls)
