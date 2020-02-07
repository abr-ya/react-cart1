import {alertActionTypes} from './actionTypes';
import {createAction} from 'typesafe-actions'; // createCustomAction

//export const hideAlert = createAction(alertActionTypes.HIDE_ALERT)();
export const showAlert = createAction(alertActionTypes.SHOW_ALERT)();
export const hideAlert = createAction(alertActionTypes.HIDE_ALERT)();

// export const hideAlert = createCustomAction(alertActionTypes.HIDE_ALERT, type => (
// 	(data: boolean) => ({type, data})
// ));
//export const showAlert = createCustomAction(alertActionTypes.SHOW_ALERT, type => () => ({type}));
