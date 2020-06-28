import React from 'react';
import Products from '../components/Products/Products';
import Filter from '../components/Filter/Filter';
import Cart from '../components/Cart/Cart';
import {IHome, IProduct} from '../interfaces';

export const Home = ({
	setSort,
	setSize,
	addToCart,
	delFromCart,
	products,
	sort,
	size,
	cart,
}: IHome) => {
	const filteredProducts: IProduct[] = size ? products.filter(item => (item.availableSizes.includes(size))) : products;
	//console.log('filtered:', filteredProducts);

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

	let sortedProducts = filteredProducts;
	if (sort === 'lowestprice') {
		sortedProducts = sortProductsPriceUp(filteredProducts);
	} else if (sort === 'highestprice') {
		sortedProducts = sortProductsPriceDown(filteredProducts);
	}

	const handleAddToCart = (id: number) => {
		console.log('handleAddToCart', id);
		addToCart(id);
	};

	const handleRemoveFromCart = (id: number) => {
		//console.log('handleRemoveFromCart', id);
		delFromCart(id);
	};

	const sortChange = (text: any) => {
		setSort(text);
	};

	const sizeChange = (text: any) => {
		setSize(text);
	};

	const filterHandlers = {sortChange, sizeChange};

	return (
		<>
			<h1>Каталог товаров</h1>
			<div className='row'>
				<div className='col-md-8'>
					<Filter size={size} sort={sort} handlers={filterHandlers} count={sortedProducts.length} />
					<hr/>
					<Products data={sortedProducts} handleAddToCart={handleAddToCart} />
				</div>
				<div className='col-md-4'>
					<Cart products={products} cartItems={cart} handleRemoveFromCart={handleRemoveFromCart} />
				</div>
			</div>
		</>
	);
};
