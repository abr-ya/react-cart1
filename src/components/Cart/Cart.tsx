import React from 'react';
import {ICart} from '../../interfaces';

const Cart = ({cartItems, handleRemoveFromCart}: ICart) => {
	console.log('cart: ', cartItems);

	return (
		<div>
			Cart
			<button onClick={() => handleRemoveFromCart(1)}>тест удалить</button>
		</div>
	);
};

export default Cart;
