import React, {Component} from 'react';
import {Statistic} from 'semantic-ui-react';
import {connect, dispatch} from 'react-redux';
import './style.scss';

class Values extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="app__values">
				<Statistic.Group>
					<Statistic>
						<Statistic.Value>00</Statistic.Value>
						<Statistic.Label>H</Statistic.Label>
					</Statistic>
					<Statistic>
						<Statistic.Value>00</Statistic.Value>
						<Statistic.Label>M</Statistic.Label>
					</Statistic>
				</Statistic.Group>
				<Statistic.Group>
					<Statistic>
						<Statistic.Value>00</Statistic.Value>
						<Statistic.Label>S</Statistic.Label>
					</Statistic>
					<Statistic>
						<Statistic.Value>00</Statistic.Value>
						<Statistic.Label>MS</Statistic.Label>
					</Statistic>
				</Statistic.Group>
			</div>

		)
	}
}

let appState = (state) => {
	return {
		appReducer: state.appReducer
	}
}

export default connect(appState)(Values)
