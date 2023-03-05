import { coursesState } from './types';

const coursesInitialState = [];

const coursesReducer = (state: coursesState = coursesInitialState, action) => {
	switch (action.type) {
		case 'GET_COURSES':
			return action.payload;
		case 'ADD_COURSE':
			console.log('add course');
			return [...state, action.payload];
		case 'DELETE_COURSE':
			console.log('delete course');
			return state;
		case 'UPDATE_COURSE':
			console.log('update course');
			return state;
		default: {
			return state; // We return the default state here
		}
	}
};

export default coursesReducer;
