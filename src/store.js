import { createStore, combineReducers} from 'redux';
import cajeroReducer from './reducers/cajero';

import { composeWithDevTools } from 'redux-devtools-extension'

//COMBINA TODOS LOS REDUCER QUE TENGA
const reducers = combineReducers(
    {
    cajeroReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;