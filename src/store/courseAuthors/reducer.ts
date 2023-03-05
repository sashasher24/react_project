import { authorsState } from './types';

const courseAuthorsInitialState: authorsState = [];

const courseAuthorsReducer = (
	state: authorsState = courseAuthorsInitialState,
	action
) => {
	switch (action.type) {
		case 'ADD_COURSE_AUTHOR':
			console.log('add course author');
			return state.includes(action.payload)
				? state
				: [...state, action.payload];
			break;
		case 'DELETE_COURSE_AUTHOR': {
			console.log('delete course author');
			const authors = [...state];
			const index = authors.indexOf(action.payload);
			authors.splice(index, 1);
			return authors;
			break;
		}
		default: {
			return state; // We return the default state here
		}
	}
};

export default courseAuthorsReducer;
