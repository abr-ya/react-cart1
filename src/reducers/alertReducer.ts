import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/alertActions';
// SHOW_ALERT, HIDE_ALERT

export type alertState = Readonly<{
	display: boolean;
}>;

const initialState: alertState = {
	display: false,
};

export type alertActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: alertActions,
): alertState => {
	switch(action.type) {
		case getType(actions.showAlert):
			return {
				display: true,
			};
		case getType(actions.hideAlert):
			return {
				display: false, // action.data
			};
		default:
			return state;
	}
};
