                                                
export interface ICats {
	breeds: [],
	id: string,
	url: string,
	width: number,
	height: number,
	isFavorite?: boolean,
}

export interface IInitialState {
	cats: ICats[],
	loading: boolean,
	error: boolean,
}