import axios from 'axios';
import { authorsState } from './types';

const authorsInitialState: authorsState = [];
const courseAuthorsInitialState: authorsState = [];

const authorsReducer = (state: authorsState = authorsInitialState, action) => {
	switch (action.type) {
		case 'FETCH_AUTHORS_SUCCESS':
			// console.log(`payload ${action.payload}`);
			return action.payload;
		case 'GET_AUTHORS': {
			let authors = [];
			axios.get('http://localhost:4000/authors/all').then((response) => {
				authors = response.data.result;
			});
			console.log('get authors');
			return authors;
			break;
		}
		case 'CREATE_AUTHOR':
			console.log('create author');
			return state;
			break;
		case 'ADD_COURSE_AUTHOR':
			console.log('add course author');
			return state;
			break;
		case 'DELETE_COURSE_AUTHOR':
			console.log('delete course author');
			return state;
			break;
		default: {
			return state; // We return the default state here
		}
	}
};

export default authorsReducer;
