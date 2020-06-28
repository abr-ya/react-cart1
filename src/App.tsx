import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import {IApp} from './interfaces';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader/Loader';
import {Home, About} from './pages/';

const App = ({
	requestProductsSaga,
	loading,
	products, sort, size, cart,
	setSort, setSize, addToCart, delFromCart,
}: IApp) => {
	useEffect(() => {
		requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const title = 'React TS T-Shirts Shop App';
	const links = [
		{link: '/', name: 'Главная', exact: true},
		{link: '/about', name: 'About', exact: true},
	];

	return (
		<BrowserRouter basename='/demo/shop/'>
			<div className='container'>
				<Nav title={title} links={links} />
			</div>
			<div className={'container'}>
				{loading
					? <Loader/>
					: (
						<Switch>
							<Route
								path='/'
								exact
								component={() => (
									<Home
										setSort={setSort}
										setSize={setSize}
										addToCart={addToCart}
										delFromCart={delFromCart}
										products={products}
										sort={sort}
										size={size}
										cart={cart}
									/>
								)}
							/>
							<Route path='/about' component={About} />
							<Redirect to='/' />
						</Switch>
					)
				}
			</div>
		</BrowserRouter>
	);
};

export default App;
