import React, {useEffect} from 'react';
import {ICart} from '../../interfaces';

const Cart = ({products, cartItems, handleRemoveFromCart}: ICart) => {
	useEffect(() => {
		//console.log('cart in Cart!');
	// eslint-disable-next-line
	}, [cartItems]);

	//console.log('cart: ', cartItems);
	const cartItemsArr = [];
	if (Object.keys(cartItems).length > 0) {
		// tslint:disable-next-line: forin
		for (const key in cartItems) {cartItemsArr.push([key, cartItems[key]]);}
	}

	return (
		<div>
			<div className='alert alert-info'>
				{Object.keys(cartItems).length === 0
					? 'Basket is empty' :
					<div>You have {Object.keys(cartItems).length} items in the basket:</div>
				}
				{Object.keys(cartItems).length > 0 && (
					<ul>
						{cartItemsArr.map(item => (
							<li key={item[0]}>
								{products.find(prod => prod.id.toString() === item[0])?.title}: {item[1]}
								<button className='btn btn-danger btn-xs' onClick={() =>handleRemoveFromCart(item[0])}>X</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Cart;
