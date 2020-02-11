import App from '../App';
import {connect} from 'react-redux';
import {showLoading, hideLoading, requestProductsSaga, setSort, setSize, addToCart} from '../actions/productActions';

import {RootState} from '../index';

const mapStateToProps = (state: RootState) => ({
	loading: state.product.loading,
	products: state.product.products,
	sort: state.product.sort,
	size: state.product.size,
	cart: state.product.cart,
});

const mapDispatchToProps = {
	showLoading,
	hideLoading,
	requestProductsSaga,
	setSort,
	setSize,
	addToCart,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
