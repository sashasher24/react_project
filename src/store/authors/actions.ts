import axios from 'axios';

//synchronous action creator
const fetchAuthorsSuccess = (authors) => ({
	type: 'FETCH_AUTHORS_SUCCESS',
	payload: authors,
});

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
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

export const getAuthors = () => {
	return {
		type: 'GET_AUTHORS',
	};
};

export const createAuthor = () => {
	return {
		type: 'CREATE_AUTHOR',
	};
};

export const addCourseAuthor = () => {
	return {
		type: 'ADD_COURSE_AUTHOR',
	};
};

export const deleteCourseAuthor = () => {
	return {
		type: 'DELETE_COURSE_AUTHOR',
	};
};
