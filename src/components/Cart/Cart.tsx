import React from 'react';
import {ICart} from '../../interfaces';

const Cart = ({cartItems, handleRemoveFromCart}: ICart) => {
	console.log('cart: ', cartItems);

	return (
		<div>
			Cart
			<button onClick={() => handleRemoveFromCart(1)}>тест удалить</button>

			<div className='alert alert-info'>
				{cartItems.length === 0
					? 'Basket is empty' :
					<div>You have {cartItems.length} items in the basket. <hr /></div>
				}
				{cartItems.length > 0 &&
					<div>что-то тут есть...</div>
				}
			</div>
		</div>
	);
};

export default Cart;
