import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import Chart from 'chart.js';
import style from './style.scss';

class Timer extends Component{
    constructor(props){
        super(props);
        this.round = null;
    }

    componentDidMount(){
        let elem = document.getElementById('timeline').getContext('2d');

        if(!this.round){
            this.round = new Chart(elem, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [5],
                        backgroundColor: ['rgb(255, 99, 132)'],
                    }],
                },
                options: {
                    cutoutPercentage: 90,
                    animation:{
                        animateRotate: true,
                        duration: 8000,
                        easing: 'linear',
                        onComplete: function(animation){

                        }
                    }
                }
            })
        }
    }

    render(){
		// if(this.round){
        //     let {ctrlStart, ctrlPause, ctrlStop} = this.props;
        //
        //
        //     if(ctrlStart){
        //         this.round.options.animation.duration =
        //     }
        //
        //
        // }
        return(
            <div className="app__timeline">
                <canvas id="timeline"></canvas>
            </div>
        )
    }
}

let appState = (state) => {
	return {
		time: state.appReducer.time,
        ctrlStart: state.appReducer.ctrlStart,
		ctrlPause: state.appReducer.ctrlPause,
		ctrlStop: state.appReducer.ctrlStop,
		timerTime: state.appReducer.timerTime
	}
}

export default connect(appState)(Timer)
