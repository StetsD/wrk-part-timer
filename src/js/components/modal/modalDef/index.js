import React, {Component} from 'react';
import {Modal, Button, Icon, Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {refresh} from '../actions';

class ModalDef extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    static PropTypes = {
        dispatch: PropTypes.func.isRequired
    }

    handleClick(){
        this.props.dispatch(refresh());
    }

    render(){
        let {err} = this.props;

        return(
            <Modal basic size="small" open={err ? true : false}>
                <Header icon="time" content={err}></Header>
                <Modal.Actions>
                    <Button basic color="red" inverted onClick={this.handleClick}>
                        <Icon name="checkmark"/> Ok
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

let appState = state => {
    return {
        err: state.appReducer.err
    }
}

export default connect(appState)(ModalDef);
