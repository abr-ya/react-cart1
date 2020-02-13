import React from 'react';
import {ICart} from '../../interfaces';

const Cart = ({cartItems, handleRemoveFromCart}: ICart) => {
	console.log('cart: ', cartItems);
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
					<div>You have {Object.keys(cartItems).length} items in the basket. <hr /></div>
				}
				{Object.keys(cartItems).length > 0 && (
					<ul>
						{cartItemsArr.map(item => (
							<li key={item[0]}>
								id {item[0]}: {item[1]}
								<button className='btn btn-danger' onClick={() =>handleRemoveFromCart(item[0])}>X</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Cart;
