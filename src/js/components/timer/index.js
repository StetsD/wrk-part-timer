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
        return(
            <div className="app__timeline">
                <canvas id="timeline"></canvas>
            </div>
        )
    }
}

let appState = (state) => {
	return {
		appReducer: state.appReducer
	}
}

export default connect(appState)(Timer)
