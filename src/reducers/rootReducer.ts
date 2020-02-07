import {combineReducers} from 'redux';
import alertReducer from './alertReducer';

const createRootReducer = () =>
	combineReducers({
		alert: alertReducer,
	});

export default createRootReducer;
