import {createStore, compose} from 'redux';
import rootReducer from './reducer';

// export default function configureStore(initialState){
//     const store = compose()(rootReducer, initialState);
//
//     return store;
// }

const store = createStore(rootReducer);

export default store;
