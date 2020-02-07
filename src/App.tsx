import React from 'react';
import './App.css';
import Products from './components/Products/Products';

export interface IApp {
	showAlert: () => void;
	hideAlert: (data: boolean) => void;
	firstSaga: () => void;
	display: boolean;
	//text: string;
	//id: number;
}

const App = ({showAlert, hideAlert, firstSaga, display}: IApp) => {
	const filteredProducts: any[] = [];

	const handleAddToCart = () => {
		console.log('handleAddToCart');
	};

	const but1ClickHandler = () => {
		console.log('but1ClickHandler');
		showAlert();
	};

	const but2ClickHandler = () => {
		console.log('but2ClickHandler');
		hideAlert(false);
	};

	const but3ClickHandler = () => {
		console.log('but3ClickHandler');
		firstSaga();
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
					<button onClick={but1ClickHandler}>тест 1</button><br/>
					<button onClick={but2ClickHandler}>тест 2</button><br/>
					<button onClick={but3ClickHandler}>тест 3</button><br/>
					Display: {display ? 'true' : 'false'}
				</div>
			</div>
		</div>
	);
};

export default App;
