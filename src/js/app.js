import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';

class App extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div>
                <h1>Tesss</h1>
            </div>
        )
    }
}

export default connect(state => state)(App)
