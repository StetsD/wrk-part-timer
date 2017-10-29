import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {start, pause, stop} from './actions';
import TimerMech from '../../modules/TimerMech';
import './style.scss';

class Controls extends Component{
    constructor(props){
        super(props);
        this.handleClickCtrl = this.handleClickCtrl.bind(this);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    handleClickCtrl(e, val){
        switch(val.icon){
            case 'play':
                this.props.dispatch(start());
                break;
            case 'pause':
                this.props.dispatch(pause());
                break;
            case 'stop':
                this.props.dispatch(stop());
                break;
            default:
                break;
        }
    }



    render(){
        return(
            <div className="app__controls">
                <Button.Group>
                    <Button onClick={this.handleClickCtrl} icon="play"></Button>
                    <Button onClick={this.handleClickCtrl} icon="pause"></Button>
                    <Button onClick={this.handleClickCtrl} icon="stop"></Button>
                </Button.Group>
            </div>
        )
    }
}


let appState = (state) => {
    return {

    }
};

export default connect(appState)(Controls)
