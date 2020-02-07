export interface IProduct {
	text: string;
	id: number;
	done: boolean;
}

export interface IProducts {
	data: IProduct[];
	handleAddToCart(id: number): void;
}
