import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {Timer, Settings, Values, Controls} from './components/';
import AudioPlayer from './modules/AudioPlayer';

class App extends Component{
    constructor(props){
        super(props);
        this.player;
    };

	componentDidMount(){
        this.player = new AudioPlayer({
            elem: document.getElementById('audio-finish')
        });
        window.player = this.player;
	}

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
				<audio id="audio-finish"></audio>
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
