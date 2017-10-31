import style from './css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import App from './js/app';
import routes from './js/routes';
import store from './js/store';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
),
document.querySelector('#app'));
