import React from 'react';
import {IProducts} from './interfaces';

const Products = ({data, handleAddToCart}: IProducts) => {
	console.log('products');
	//console.log(data);
	//console.log(handleAddToCart);

	return (
		<div>
			Products
		</div>
	);
};

export default Products;
