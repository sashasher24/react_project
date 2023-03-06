import axios from 'axios';
import { UserCredentials } from './components/Login/Login';
import { NewUser } from './components/Registration/Registration';
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

export const postLogin = async (UserCredentials: UserCredentials) => {
	try {
		const { data } = await axios.post(
			'http://localhost:4000/login',
			UserCredentials
		);
		return data;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const postRegister = async (credentials: NewUser) => {
	await axios
		.post('http://localhost:4000/register', credentials)
		.then((response) => {
			console.log(response);
		})
		.catch((e) => {
			alert(e.message);
			console.log(e.message);
		});
};
