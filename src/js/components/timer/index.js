import React, {Component} from 'react';
import Chart from 'chart.js';

export default class Timer extends Component{
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
            <canvas id="timeline"></canvas>
        )
    }
}
