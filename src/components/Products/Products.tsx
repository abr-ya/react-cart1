import React from 'react';
import {IProducts} from './interfaces';
import * as utils from '../../utils';

const Products = ({data, handleAddToCart}: IProducts) => {
	//console.log(data);
	//console.log(handleAddToCart);
	const productsHtml = data.map(item => (
		<div className='col-md-4' key={item.id}>
			<div className='thumbnail text-center' onClick={() => handleAddToCart(item.id)}>
				<img src={`/products/${item.sku}_2.jpg`} alt={item.sku} />
				<p>{item.title}</p>
			</div>
			<div>
				<b>{utils.formatCurrency(item.price)}</b>
				<button className='btn btn-primary' onClick={() => handleAddToCart(item.id)} >
					Add To cart
				</button>
			</div>
		</div>
	));

	return (
		<div className='row'>
			{productsHtml}
		</div>
	);
};

export default Products;
