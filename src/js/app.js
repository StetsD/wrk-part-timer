import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {Timer} from './components/';


class App extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div>
                <Timer/>
            </div>
        )
    }
}

export default connect(state => state)(App)
