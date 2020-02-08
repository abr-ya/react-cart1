import {call, takeLatest, put} from 'redux-saga/effects'; // takeEvery, select
import * as api from './api';
import * as productActions from './actions/productActions';
import {productActionTypes} from './actions/productActionTypes';
//import {RootState} from 'main';

function* requestProductsSaga(action: ReturnType<typeof productActions.requestProductsSaga>) {
	try {
		yield put(productActions.showLoading());
		const response = yield call(api.requestProducts);
		console.log(response.data);
		yield put(productActions.setProducts(response.data));
		yield put(productActions.hideLoading(false));
		//yield put(actions.setNets(response.data.networks));
		//
		//const response = yield call(requestCartData, action.payload);
		//yield put(cartActions.setCartData(response.data.data));
		//yield put(cartActions.setCartIsLoading(false));
	} catch (error) {
		console.error(error);
	}
}

export default function* watchEntities() {
	yield takeLatest(productActionTypes.REQUEST_PRODUCTS_SAGA, requestProductsSaga);
}
