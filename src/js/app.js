import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {Timer, Settings, Values, Controls} from './components/';


class App extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="app">
				<div className="app__inner">
                    <div className="app__main-interface">
                        <Controls/>
                        <Timer/>
                        <Values/>
                    </div>
                    <Settings/>
				</div>
            </div>
        )
    }
}

let appState = state => {
    return {
        appReducer: state.appReducer
    }
}

export default connect(appState)(App);
