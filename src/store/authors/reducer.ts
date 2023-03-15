import { authorsState } from './types';

const authorsInitialState: authorsState = [];

const authorsReducer = (state: authorsState = authorsInitialState, action) => {
	switch (action.type) {
		case 'FETCH_AUTHORS_SUCCESS':
			return action.payload;
		case 'CREATE_AUTHOR':
			console.log('create author');
			return state;
		default: {
			return state; // We return the default state here
		}
	}
};

export default authorsReducer;
