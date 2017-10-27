import style from './css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './js/routes';
import store from './js/store';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
),
document.querySelector('#app'));
