import {alertActionTypes} from './actionTypes';
import {createAction, createCustomAction} from 'typesafe-actions';

export const showAlert = createAction(alertActionTypes.SHOW_ALERT)();

export const hideAlert = createCustomAction(alertActionTypes.HIDE_ALERT,
	(data: boolean) => ({data}),
);
