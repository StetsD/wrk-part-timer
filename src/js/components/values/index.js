import React, {Component} from 'react';
import {Statistic} from 'semantic-ui-react';
import {connect, dispatch} from 'react-redux';
import {getSpecifyColor, getTimePart} from '../../modules/customizeModule';
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
		let {mode, time, timeDynamic} = this.props;
		let {hh, mm, ss} = this.parseSummaryTime(timeDynamic);
		let val = getTimePart(time, timeDynamic);
        let valColor = mode === 'timer' ? getSpecifyColor(+val.toFixed(1), 'key') : 'black';

		return(
			<div className="app__values">
				<Statistic.Group>
					<Statistic color={valColor}>
						<Statistic.Value>{(hh < 10 ? `0${hh}` : hh)}</Statistic.Value>
						<Statistic.Label>H</Statistic.Label>
					</Statistic>
					<Statistic color={valColor}>
						<Statistic.Value>{(mm < 10 ? `0${mm}` : mm)}</Statistic.Value>
						<Statistic.Label>M</Statistic.Label>
					</Statistic>
					<Statistic color={valColor}>
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
		time: state.appReducer.time,
		timeDynamic: state.appReducer.timeDynamic,
		mode: state.appReducer.mode
	}
}

export default connect(appState)(Values)
