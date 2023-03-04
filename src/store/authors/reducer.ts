import { authorsState } from './types';

const authorsInitialState: authorsState = [];

const authorsReducer = (state: authorsState = authorsInitialState, action) => {
	switch (action.type) {
		case 'ADD_AUTHOR':
			console.log('add author');
			break;
		case 'DELETE_AUTHOR':
			console.log('delete author');
			break;
		default: {
			return state; // We return the default state here
		}
	}
};

export default authorsReducer;
