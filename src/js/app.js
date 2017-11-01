import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {Timer, Settings, Values, Controls, ModalEnd, ModalDef} from './components/';
import AudioPlayer from './modules/AudioPlayer';

class App extends Component{
    constructor(props){
        super(props);
        this.player;
    };

	componentDidMount(){
        this.player = new AudioPlayer({
            audio: document.getElementById('audio-finish')
        });

	}

    render(){
        let {ctrlEnd, err} = this.props.appReducer;
        this.player ?
            ctrlEnd ? this.player.play() : this.player.stop()
            : null;

        return(
            <div className="app">
				<div className="app__inner">
                    <div className="app__main-interface">
                        <Controls/>
                        <Timer/>
                        <Values/>
                    </div>
                    <Settings/>
                    <ModalEnd/>
                    <ModalDef/>
				</div>
				<audio id="audio-finish">
                    <source id="audio-finish-src" type="audio/mp3"></source>
                </audio>
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
