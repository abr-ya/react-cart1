import React from 'react';
import './App.css';
import Products from './components/Products/Products';

const App = () => {
	const filteredProducts: any[] = [];

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
				</div>
			</div>
		</div>
	);
};

export default App;
