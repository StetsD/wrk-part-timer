import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {Timer, Controls} from './components/';


class App extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="app">
                <Controls/>
                <Timer/>
            </div>
        )
    }
}

export default connect(state => state)(App)
