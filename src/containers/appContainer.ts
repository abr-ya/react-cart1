import App from '../App';
import {connect} from 'react-redux';
import {showLoading, hideLoading, requestProductsSaga} from '../actions/productActions';

import {RootState} from '../index';

const mapStateToProps = (state: RootState) => ({
	loading: state.product.loading,
	products: state.product.products,
});

const mapDispatchToProps = {
	showLoading,
	hideLoading,
	requestProductsSaga,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
