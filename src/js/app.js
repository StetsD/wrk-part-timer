import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Timer, Settings, Values, Controls, ModalEnd, ModalDef} from './components/';
import AudioPlayer from './modules/AudioPlayer';
import {refresh} from './components/modal/actions';

class App extends Component{
    constructor(props){
        super(props);
        this.player;
    };

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

	componentDidMount(){
        !this.player ? this.player = new AudioPlayer({
            audio: document.getElementById('audio-finish')
        }) : null;
	}

    componentWillUpdate(){
        let {newAudioEnd} = this.props.appReducer;
        (newAudioEnd && newAudioEnd !== this.player.getAudioEnd())
            && this.player.setAudioEnd(newAudioEnd);
    }

    render(){
        let {ctrlEnd, err, newAudioEnd} = this.props.appReducer;
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
