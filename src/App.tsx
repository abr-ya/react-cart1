import React, {useEffect} from 'react';
import './App.css';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import {IApp, IProduct} from './interfaces';

const App = ({requestProductsSaga, loading, products, setSort, sort, setSize, size}: IApp) => {
	const filteredProducts: IProduct[] = size ? products.filter(item => (item.availableSizes.includes(size))) : products;
	console.log('filtered:', filteredProducts);

	// tslint:disable-next-line: no-shadowed-variable
	const sortProductsPriceUp = (products: IProduct[]) =>
		products.sort((prodA: IProduct, prodB: IProduct) => {
			if (prodA.price > prodB.price) return 1;
			if (prodA.price < prodB.price) return -1;

			return 0;
		});

	// tslint:disable-next-line: no-shadowed-variable
	const sortProductsPriceDown = (products: IProduct[]) =>
	products.sort((prodA: IProduct, prodB: IProduct) => {
		if (prodA.price > prodB.price) return -1;
		if (prodA.price < prodB.price) return 1;

		return 0;
	});

	let sortedProducts = products;
	if (sort === 'lowestprice') {
		sortedProducts = sortProductsPriceUp(filteredProducts);
	} else if (sort === 'highestprice') {
		sortedProducts = sortProductsPriceDown(filteredProducts);
	}

	console.log('sorted:', sortedProducts);

	useEffect(() => {
		requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const handleAddToCart = () => {
		console.log('handleAddToCart');
	};

	const sortChange = (text: any) => {
		setSort(text);
	};

	const sizeChange = (text: any) => {
		console.log('sizeChange');
		setSize(text);
	};

	const filterHandlers = {sortChange, sizeChange};

	return (
		<div className='container'>
			<h1>React TS Cart</h1>
			<hr/>
			<div className='row'>
				<div className='col-md-8'>
					<Filter size={size} sort={sort} handlers={filterHandlers} count={products.length} />
					<hr/>
					<Products data={sortedProducts} handleAddToCart={handleAddToCart} />
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
