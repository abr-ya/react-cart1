import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/productActions';
// SHOW_ALERT, HIDE_ALERT

export type productState = Readonly<{
	loading: boolean;
	products: any[];
	sort: string;
	size: string;
	cart: any[];
}>;

const initialState: productState = {
	loading: false,
	products: [],
	sort: '',
	size: '',
	cart: [],
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
		case getType(actions.setSort):
			return {
				...state,
				sort: action.sort,
			};
		case getType(actions.setSize):
			return {
				...state,
				size: action.size,
			};
		case getType(actions.addToCart):
			const newCart = [...state.cart];
			newCart[action.id] =  state.cart[action.id] ? parseInt(state.cart[action.id], 10) + 1 : 1;

			return {
				...state,
				cart: newCart,
			};
		default:
			return state;
	}
};
