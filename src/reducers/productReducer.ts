import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/productActions';
// SHOW_ALERT, HIDE_ALERT

export type productState = Readonly<{
	loading: boolean;
	products: any[];
}>;

const initialState: productState = {
	loading: false,
	products: [],
};

export type productActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: productActions,
): productState => {
	switch(action.type) {
		case getType(actions.showLoading):
			return {
				...state,
				loading: true,
			};
		case getType(actions.hideLoading):
			return {
				...state,
				loading: action.data,
			};
		case getType(actions.setProducts):
			return {
				...state,
				products: action.data,
			};
		default:
			return state;
	}
};
