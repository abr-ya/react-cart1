import {productActionTypes} from './productActionTypes';
import {createAction, createCustomAction} from 'typesafe-actions';

export const showLoading = createAction(productActionTypes.SHOW_LOADING)();
export const hideLoading = createCustomAction(productActionTypes.HIDE_LOADING,
	(data: boolean) => ({data}),
);
export const requestProductsSaga = createAction(productActionTypes.REQUEST_PRODUCTS_SAGA)();
export const setProducts = createCustomAction(productActionTypes.SET_PRODUCTS,
	(data: any[]) => ({data}),
);