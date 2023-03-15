import { addAuthorRequest, getAllAuthors } from '../../services';
import { addAuthorSuccess, fetchAuthorsSuccess } from './actions';

export const fetchAuthors = () => {
	return async (dispatch) => {
		try {
			const authors = await getAllAuthors();
			dispatch(fetchAuthorsSuccess(authors)); //authors
		} catch (e) {
			console.log(e);
		}
	};
};

export const addAuthor = (authorData) => {
	return async (dispatch) => {
		try {
			await addAuthorRequest(authorData);
			dispatch(addAuthorSuccess());
		} catch (e) {
			alert(e);
		}
	};
};
