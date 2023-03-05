import axios from 'axios';
import { fetchAuthorsSuccess } from './store/authors/actions';
import { fetchCoursesSuccess } from './store/courses/actions';

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchCourses = () => {
	return async (dispatch) => {
		try {
			const posts = await axios.get('http://localhost:4000/courses/all');
			dispatch(fetchCoursesSuccess(posts.data.result)); //courses
		} catch (e) {
			console.log(e);
		}
	};
};

export const fetchAuthors = () => {
	return async (dispatch) => {
		try {
			const posts = await axios.get('http://localhost:4000/authors/all');
			dispatch(fetchAuthorsSuccess(posts.data.result)); //authors
		} catch (e) {
			console.log(e);
		}
	};
};
