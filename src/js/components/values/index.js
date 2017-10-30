import React, {Component} from 'react';
import {Statistic} from 'semantic-ui-react';
import {connect, dispatch} from 'react-redux';
import './style.scss';

class Values extends Component{
	constructor(props){
		super(props);
	}

	parseSummaryTime(val){
		return {
			hh: Math.trunc(val / 3600),
			mm: Math.trunc((val % 3600) / 60),
			ss: (val % 3600) % 60
		}
	}

	render(){
		let {ctrlStart, timeDynamic} = this.props;
		let {hh, mm, ss} = this.parseSummaryTime(timeDynamic);

		return(
			<div className="app__values">
				<Statistic.Group>
					<Statistic size='mini'>
						<Statistic.Value>{(hh < 10 ? `0${hh}` : hh)}</Statistic.Value>
						<Statistic.Label>H</Statistic.Label>
					</Statistic>
					<Statistic size='mini'>
						<Statistic.Value>{(mm < 10 ? `0${mm}` : mm)}</Statistic.Value>
						<Statistic.Label>M</Statistic.Label>
					</Statistic>
					<Statistic size='mini'>
						<Statistic.Value>{(ss < 10 ? `0${ss}` : ss)}</Statistic.Value>
						<Statistic.Label>S</Statistic.Label>
					</Statistic>
				</Statistic.Group>

			</div>

		)
	}
}

let appState = (state) => {
	return {
		timeDynamic: state.appReducer.timeDynamic,
		ctrlStart: state.appReducer.ctrlStart,
		ctrlPause: state.appReducer.ctrlPause,
		ctrlStop: state.appReducer.ctrlStop
	}
}

export default connect(appState)(Values)
