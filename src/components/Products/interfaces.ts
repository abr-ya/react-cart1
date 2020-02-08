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
