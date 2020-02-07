import {call, put, takeLatest, takeEvery, select} from 'redux-saga/effects';
import * as api from './api';
import * as alertActions from './actions/alertActions';
import {alertActionTypes} from './actions/actionTypes';
//import {RootState} from 'main';

function* requestFirstSaga(action: ReturnType<typeof alertActions.firstSaga>) {
	try {
		console.log('requestFirstSaga');
		const response = yield call(api.requestNetsFromApi);
		console.log(response.data);
		//yield put(actions.setNets(response.data.networks));
		//yield put(cartActions.setCartIsLoading(true));
		//const response = yield call(requestCartData, action.payload);
		//yield put(cartActions.setCartData(response.data.data));
		//yield put(cartActions.setCartIsLoading(false));
	} catch (error) {
		console.error(error);
	}
}

export default function* watchEntities() {
	yield takeLatest(alertActionTypes.FIRST_SAGA, requestFirstSaga);
}
