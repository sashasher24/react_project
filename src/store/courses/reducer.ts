import { coursesState } from './types';

const coursesInitialState = [];

const coursesReducer = (state: coursesState = coursesInitialState, action) => {
	switch (action.type) {
		case 'ADD_COURSE':
			console.log('add course');
			break;
		case 'DELETE_COURSE':
			console.log('delete course');
			break;
		case 'UPDATE_COURSE':
			console.log('update course');
			break;
		case 'GET_COURSES':
			console.log('get courses');
			break;
		default: {
			return state; // We return the default state here
		}
	}
};

export default coursesReducer;
