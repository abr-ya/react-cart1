export interface IApp {
	showLoading: () => void;
	hideLoading: (data: boolean) => void;
	requestProductsSaga: () => void;
	setSort: (text: string) => void;
	setSize: (text: string) => void;
	addToCart: (id: number) => void;
	loading: boolean;
	products: any[];
	sort: string;
	size: string;
	cart: any;
	//text: string;
	//id: number;
}

export interface IProduct {
	id: number;
	sku: string;
	title: string;
	description: string;
	availableSizes: string[];
	price: number;
	isFreeShipping: boolean;
}

export interface IProducts {
	data: IProduct[];
	handleAddToCart(id: number): void;
}

export interface IFilter {
	size: string;
	sort: string;
	handlers: {
		sortChange: (text: string) => void;
		sizeChange: (text: string) => void;
	};
	count: number;
}

export interface ICart {
	cartItems: any;
	handleRemoveFromCart(id: number): void;
}