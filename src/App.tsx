import React, {useEffect} from 'react';
import './App.css';
import Products from './components/Products/Products';

export interface IApp {
	showLoading: () => void;
	hideLoading: (data: boolean) => void;
	requestProductsSaga: () => void;
	loading: boolean;
	products: any[];
	//text: string;
	//id: number;
}

const App = ({showLoading, hideLoading, requestProductsSaga, loading, products}: IApp) => {
	const filteredProducts: any[] = products;

	useEffect(() => {
		requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const handleAddToCart = () => {
		console.log('handleAddToCart');
	};

	return (
		<div className='container'>
			<h1>React TS Cart</h1>
			<hr/>
			<div className='row'>
				<div className='col-md-8'>
					<Products data={filteredProducts} handleAddToCart={handleAddToCart} />
				</div>
				<div className='col-md-4'>
					Cart
					loading: {loading ? 'true' : 'false'}
				</div>
			</div>
		</div>
	);
};

export default App;
